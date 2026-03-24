import type { WeixinApiOptions } from "../api/api.js";
import type { UploadedFileInfo } from "../cdn/upload.js";
/**
 * Convert markdown-formatted model reply to plain text for Weixin delivery.
 * Preserves newlines; strips markdown syntax.
 */
export declare function markdownToPlainText(text: string): string;
/**
 * Send a plain text message downstream.
 */
export declare function sendMessageWeixin(params: {
    to: string;
    text: string;
    opts: WeixinApiOptions & {
        contextToken?: string;
    };
}): Promise<{
    messageId: string;
}>;
/**
 * Send an image message downstream using a previously uploaded file.
 * Optionally include a text caption as a separate TEXT item before the image.
 *
 * ImageItem fields:
 *   - media.encrypt_query_param: CDN download param
 *   - media.aes_key: AES key, base64-encoded
 *   - mid_size: original ciphertext file size
 */
export declare function sendImageMessageWeixin(params: {
    to: string;
    text: string;
    uploaded: UploadedFileInfo;
    opts: WeixinApiOptions & {
        contextToken?: string;
    };
}): Promise<{
    messageId: string;
}>;
/**
 * Send a video message downstream using a previously uploaded file.
 * VideoItem: media (CDN ref), video_size (ciphertext bytes).
 * Includes an optional text caption sent as a separate TEXT item first.
 */
export declare function sendVideoMessageWeixin(params: {
    to: string;
    text: string;
    uploaded: UploadedFileInfo;
    opts: WeixinApiOptions & {
        contextToken?: string;
    };
}): Promise<{
    messageId: string;
}>;
/**
 * Send a file attachment downstream using a previously uploaded file.
 * FileItem: media (CDN ref), file_name, len (plaintext bytes as string).
 * Includes an optional text caption sent as a separate TEXT item first.
 */
export declare function sendFileMessageWeixin(params: {
    to: string;
    text: string;
    fileName: string;
    uploaded: UploadedFileInfo;
    opts: WeixinApiOptions & {
        contextToken?: string;
    };
}): Promise<{
    messageId: string;
}>;
//# sourceMappingURL=send.d.ts.map