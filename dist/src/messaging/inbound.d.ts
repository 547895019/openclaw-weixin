import type { WeixinMessage, MessageItem } from "../api/types.js";
/**
 * Restore persisted context tokens for an account into the in-memory map.
 * Called once during gateway startAccount to survive restarts.
 */
export declare function restoreContextTokens(accountId: string): void;
/** Remove all context tokens for a given account (memory + disk). */
export declare function clearContextTokensForAccount(accountId: string): void;
/** Store a context token for a given account+user pair (memory + disk). */
export declare function setContextToken(accountId: string, userId: string, token: string): void;
/** Retrieve the cached context token for a given account+user pair. */
export declare function getContextToken(accountId: string, userId: string): string | undefined;
/**
 * Find all accountIds that have an active contextToken for the given userId.
 * Used to infer the sending bot account from the recipient address when
 * accountId is not explicitly provided (e.g. cron delivery).
 *
 * Returns all matching accountIds (not just the first) so the caller can
 * detect ambiguity when multiple accounts have sessions with the same user.
 */
export declare function findAccountIdsByContextToken(accountIds: string[], userId: string): string[];
/** Inbound context passed to the OpenClaw core pipeline (matches MsgContext shape). */
export type WeixinMsgContext = {
    Body: string;
    From: string;
    To: string;
    AccountId: string;
    OriginatingChannel: "openclaw-weixin";
    OriginatingTo: string;
    MessageSid: string;
    Timestamp?: number;
    Provider: "openclaw-weixin";
    ChatType: "direct";
    /** Set by monitor after resolveAgentRoute so dispatchReplyFromConfig uses the correct session. */
    SessionKey?: string;
    context_token?: string;
    MediaUrl?: string;
    MediaPath?: string;
    MediaType?: string;
    /** Raw message body for framework command authorization. */
    CommandBody?: string;
    /** Whether the sender is authorized to execute slash commands. */
    CommandAuthorized?: boolean;
};
/** Returns true if the message item is a media type (image, video, file, or voice). */
export declare function isMediaItem(item: MessageItem): boolean;
export type WeixinInboundMediaOpts = {
    /** Local path to decrypted image file. */
    decryptedPicPath?: string;
    /** Local path to transcoded/raw voice file (.wav or .silk). */
    decryptedVoicePath?: string;
    /** MIME type for the voice file (e.g. "audio/wav" or "audio/silk"). */
    voiceMediaType?: string;
    /** Local path to decrypted file attachment. */
    decryptedFilePath?: string;
    /** MIME type for the file attachment (guessed from file_name). */
    fileMediaType?: string;
    /** Local path to decrypted video file. */
    decryptedVideoPath?: string;
};
/**
 * Convert a WeixinMessage from getUpdates to the inbound MsgContext for the core pipeline.
 * Media: only pass MediaPath (local file, after CDN download + decrypt).
 * We never pass MediaUrl — the upstream CDN URL is encrypted/auth-only.
 * Priority when multiple media types present: image > video > file > voice.
 */
export declare function weixinMessageToMsgContext(msg: WeixinMessage, accountId: string, opts?: WeixinInboundMediaOpts): WeixinMsgContext;
/** Extract the context_token from an inbound WeixinMsgContext. */
export declare function getContextTokenFromMsgContext(ctx: WeixinMsgContext): string | undefined;
//# sourceMappingURL=inbound.d.ts.map