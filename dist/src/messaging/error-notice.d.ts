/**
 * Send a plain-text error notice back to the user.
 * Fire-and-forget: errors are logged but never thrown, so callers stay unaffected.
 * No-op when contextToken is absent (we have no conversation reference to reply into).
 */
export declare function sendWeixinErrorNotice(params: {
    to: string;
    contextToken: string | undefined;
    message: string;
    baseUrl: string;
    token?: string;
    errLog: (m: string) => void;
}): Promise<void>;
//# sourceMappingURL=error-notice.d.ts.map