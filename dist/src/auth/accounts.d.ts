import type { OpenClawConfig } from "openclaw/plugin-sdk/core";
export declare const DEFAULT_BASE_URL = "https://ilinkai.weixin.qq.com";
export declare const CDN_BASE_URL = "https://novac2c.cdn.weixin.qq.com/c2c";
/**
 * Pattern-based reverse of normalizeWeixinAccountId for known weixin ID suffixes.
 * Used only as a compatibility fallback when loading accounts / sync bufs stored
 * under the old raw ID.
 * e.g. "b0f5860fdecb-im-bot" → "b0f5860fdecb@im.bot"
 */
export declare function deriveRawAccountId(normalizedId: string): string | undefined;
/** Returns all accountIds registered via QR login. */
export declare function listIndexedWeixinAccountIds(): string[];
/** Add accountId to the persistent index (no-op if already present). */
export declare function registerWeixinAccountId(accountId: string): void;
/** Remove accountId from the persistent index. */
export declare function unregisterWeixinAccountId(accountId: string): void;
/**
 * Remove stale accounts that share the same userId as the newly-bound account.
 * Called after a successful QR login to ensure only the latest account remains
 * for a given WeChat user, preventing ambiguous contextToken matches.
 *
 * @param onClearContextTokens callback to clear context tokens for the removed account
 */
export declare function clearStaleAccountsForUserId(currentAccountId: string, userId: string, onClearContextTokens?: (accountId: string) => void): void;
/** Unified per-account data: token + baseUrl in one file. */
export type WeixinAccountData = {
    token?: string;
    savedAt?: string;
    baseUrl?: string;
    /** Last linked Weixin user id from QR login (optional). */
    userId?: string;
};
/** Load account data by ID, with compatibility fallbacks. */
export declare function loadWeixinAccount(accountId: string): WeixinAccountData | null;
/**
 * Persist account data after QR login (merges into existing file).
 * - token: overwritten when provided.
 * - baseUrl: stored when non-empty; resolveWeixinAccount falls back to DEFAULT_BASE_URL.
 * - userId: set when `update.userId` is provided; omitted from file when cleared to empty.
 */
export declare function saveWeixinAccount(accountId: string, update: {
    token?: string;
    baseUrl?: string;
    userId?: string;
}): void;
/**
 * Remove all files associated with an account:
 *   - accounts/{accountId}.json                  (credentials)
 *   - accounts/{accountId}.sync.json             (getUpdates sync buf)
 *   - accounts/{accountId}.context-tokens.json   (context tokens on disk)
 *   - credentials/openclaw-weixin-{accountId}-allowFrom.json (authorized users)
 */
export declare function clearWeixinAccount(accountId: string): void;
export declare function loadConfigRouteTag(accountId?: string): string | undefined;
/**
 * No-op stub — config reload is now handled externally via `openclaw gateway restart`.
 */
export declare function triggerWeixinChannelReload(): Promise<void>;
export type ResolvedWeixinAccount = {
    accountId: string;
    baseUrl: string;
    cdnBaseUrl: string;
    token?: string;
    enabled: boolean;
    /** true when a token has been obtained via QR login. */
    configured: boolean;
    name?: string;
};
/** List accountIds from the index file (written at QR login). */
export declare function listWeixinAccountIds(_cfg: OpenClawConfig): string[];
/** Resolve a weixin account by ID, merging config and stored credentials. */
export declare function resolveWeixinAccount(cfg: OpenClawConfig, accountId?: string | null): ResolvedWeixinAccount;
//# sourceMappingURL=accounts.d.ts.map