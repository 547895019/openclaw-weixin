import fs from "node:fs/promises";
import path from "node:path";
import { resolvePreferredOpenClawTmpDir } from "openclaw/plugin-sdk/infra-runtime";
function currentDayLogFileName() {
    const now = new Date();
    const offsetMs = -now.getTimezoneOffset() * 60_000;
    const dateKey = new Date(now.getTime() + offsetMs).toISOString().slice(0, 10);
    return `openclaw-${dateKey}.log`;
}
/**
 * Parse --file argument: accepts a short 8-digit date (YYYYMMDD)
 * like "20260316", a full filename like "openclaw-2026-03-16.log",
 * or a legacy 10-digit hour timestamp "2026031614".
 */
function resolveLogFileName(file) {
    if (/^\d{8}$/.test(file)) {
        const yyyy = file.slice(0, 4);
        const mm = file.slice(4, 6);
        const dd = file.slice(6, 8);
        return `openclaw-${yyyy}-${mm}-${dd}.log`;
    }
    if (/^\d{10}$/.test(file)) {
        const yyyy = file.slice(0, 4);
        const mm = file.slice(4, 6);
        const dd = file.slice(6, 8);
        return `openclaw-${yyyy}-${mm}-${dd}.log`;
    }
    return file;
}
function mainLogDir() {
    return resolvePreferredOpenClawTmpDir();
}
function getConfiguredUploadUrl(config) {
    const section = config.channels?.["openclaw-weixin"];
    return section?.logUploadUrl;
}
/** Register the `openclaw openclaw-weixin logs-upload` CLI subcommand. */
export function registerWeixinCli(params) {
    const { program, config } = params;
    const root = program.command("openclaw-weixin").description("Weixin channel utilities");
    root
        .command("logs-upload")
        .description("Upload a Weixin log file to a remote URL via HTTP POST")
        .option("--url <url>", "Remote URL to POST the log file to (overrides config)")
        .option("--file <file>", "Log file to upload: full filename or 8-digit date YYYYMMDD (default: today)")
        .action(async (options) => {
        const uploadUrl = options.url ?? getConfiguredUploadUrl(config);
        if (!uploadUrl) {
            console.error(`[weixin] No upload URL specified. Pass --url or set it with:\n  openclaw config set channels.openclaw-weixin.logUploadUrl <url>`);
            process.exit(1);
        }
        const logDir = mainLogDir();
        const rawFile = options.file ?? currentDayLogFileName();
        const fileName = resolveLogFileName(rawFile);
        const filePath = path.isAbsolute(fileName) ? fileName : path.join(logDir, fileName);
        let content;
        try {
            content = await fs.readFile(filePath);
        }
        catch (err) {
            console.error(`[weixin] Failed to read log file: ${filePath}\n  ${String(err)}`);
            process.exit(1);
        }
        console.log(`[weixin] Uploading ${filePath} (${content.length} bytes) to ${uploadUrl} ...`);
        const formData = new FormData();
        formData.append("file", new Blob([new Uint8Array(content)], { type: "text/plain" }), fileName);
        let res;
        try {
            res = await fetch(uploadUrl, { method: "POST", body: formData });
        }
        catch (err) {
            console.error(`[weixin] Upload request failed: ${String(err)}`);
            process.exit(1);
        }
        const responseBody = await res.text().catch(() => "");
        if (!res.ok) {
            console.error(`[weixin] Upload failed: HTTP ${res.status} ${res.statusText}\n  ${responseBody}`);
            process.exit(1);
        }
        console.log(`[weixin] Upload succeeded (HTTP ${res.status})`);
        const fileid = res.headers.get("fileid");
        if (fileid) {
            console.log(`fileid: ${fileid}`);
        }
        else {
            // fileid not found; dump all headers for diagnosis
            const headers = {};
            res.headers.forEach((value, key) => {
                headers[key] = value;
            });
            console.log("headers:", JSON.stringify(headers, null, 2));
        }
        if (responseBody) {
            console.log("body:", responseBody);
        }
    });
}
//# sourceMappingURL=log-upload.js.map