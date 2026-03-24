import type { ChannelAccountSnapshot } from "/usr/lib/node_modules/openclaw/dist/plugin-sdk/index.js";
export type MonitorWeixinOpts = {
    baseUrl: string;
    cdnBaseUrl: string;
    token?: string;
    accountId: string;
    /** When non-empty, only messages whose from_user_id is in this list are processed. */
    allowFrom?: string[];
    config: import("/usr/lib/node_modules/openclaw/dist/plugin-sdk/core.js").OpenClawConfig;
    runtime?: {
        log?: (msg: string) => void;
        error?: (msg: string) => void;
    };
    abortSignal?: AbortSignal;
    longPollTimeoutMs?: number;
    /** Gateway status callback — called on each successful poll and inbound message. */
    setStatus?: (next: ChannelAccountSnapshot) => void;
};
/**
 * Long-poll loop: getUpdates -> normalize -> recordInboundSession -> dispatchReplyFromConfig.
 * Runs until abort.
 */
export declare function monitorWeixinProvider(opts: MonitorWeixinOpts): Promise<void>;
//# sourceMappingURL=monitor.d.ts.map