/**
 * Resolve the framework allowFrom file path for a given account.
 * Mirrors: `resolveAllowFromPath(channel, env, accountId)` from core.
 * Path: `<credDir>/openclaw-weixin-<accountId>-allowFrom.json`
 */
export declare function resolveFrameworkAllowFromPath(accountId: string): string;
/**
 * Read the framework allowFrom list for an account (user IDs authorized via pairing).
 * Returns an empty array when the file is missing or unreadable.
 */
export declare function readFrameworkAllowFromList(accountId: string): string[];
/**
 * Register a user ID in the framework's channel allowFrom store.
 * This writes directly to the same JSON file that `readChannelAllowFromStore` reads,
 * making the user visible to the framework authorization pipeline.
 *
 * Uses file locking to avoid races with concurrent readers/writers.
 */
export declare function registerUserInFrameworkStore(params: {
    accountId: string;
    userId: string;
}): Promise<{
    changed: boolean;
}>;
//# sourceMappingURL=pairing.d.ts.map