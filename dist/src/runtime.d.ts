import type { PluginRuntime } from "/usr/lib/node_modules/openclaw/dist/plugin-sdk/index.js";
export type PluginChannelRuntime = PluginRuntime["channel"];
/**
 * Sets the global Weixin runtime (called from plugin register).
 */
export declare function setWeixinRuntime(next: PluginRuntime): void;
/**
 * Gets the global Weixin runtime (throws if not initialized).
 */
export declare function getWeixinRuntime(): PluginRuntime;
/**
 * Waits for the Weixin runtime to be initialized (async polling).
 */
export declare function waitForWeixinRuntime(timeoutMs?: number): Promise<PluginRuntime>;
/**
 * Resolves `PluginRuntime["channel"]` for the long-poll monitor.
 *
 * Prefer the gateway-injected `channelRuntime` on `ChannelGatewayContext` when present (avoids
 * races with the module-global from `register()`). Fall back to the global set by `setWeixinRuntime()`,
 * then to a short wait for legacy hosts.
 */
export declare function resolveWeixinChannelRuntime(params: {
    channelRuntime?: PluginChannelRuntime;
    waitTimeoutMs?: number;
}): Promise<PluginChannelRuntime>;
//# sourceMappingURL=runtime.d.ts.map