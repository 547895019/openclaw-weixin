import type { WeixinInboundMediaOpts } from "../messaging/inbound.js";
import type { WeixinMessage } from "../api/types.js";
/** Persist a buffer via the framework's unified media store. */
type SaveMediaFn = (buffer: Buffer, contentType?: string, subdir?: string, maxBytes?: number, originalFilename?: string) => Promise<{
    path: string;
}>;
/**
 * Download and decrypt media from a single MessageItem.
 * Returns the populated WeixinInboundMediaOpts fields; empty object on unsupported type or failure.
 */
export declare function downloadMediaFromItem(item: WeixinMessage["item_list"] extends (infer T)[] | undefined ? T : never, deps: {
    cdnBaseUrl: string;
    saveMedia: SaveMediaFn;
    log: (msg: string) => void;
    errLog: (msg: string) => void;
    label: string;
}): Promise<WeixinInboundMediaOpts>;
export {};
//# sourceMappingURL=media-download.d.ts.map