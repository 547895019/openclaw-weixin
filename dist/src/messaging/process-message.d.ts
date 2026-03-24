import type { PluginRuntime } from "openclaw/plugin-sdk";
import type { WeixinMessage } from "../api/types.js";
/** Dependencies for processOneMessage, injected by the monitor loop. */
export type ProcessMessageDeps = {
    accountId: string;
    config: import("/usr/lib/node_modules/openclaw/dist/plugin-sdk/core.js").OpenClawConfig;
    channelRuntime: PluginRuntime["channel"];
    baseUrl: string;
    cdnBaseUrl: string;
    token?: string;
    typingTicket?: string;
    log: (msg: string) => void;
    errLog: (m: string) => void;
};
/**
 * Process a single inbound message: route → download media → dispatch reply.
 * Extracted from the monitor loop to keep monitoring and message handling separate.
 */
export declare function processOneMessage(full: WeixinMessage, deps: ProcessMessageDeps): Promise<void>;
//# sourceMappingURL=process-message.d.ts.map