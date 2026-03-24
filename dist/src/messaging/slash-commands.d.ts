export interface SlashCommandResult {
    /** 是否是斜杠指令（true 表示已处理，不需要继续走 AI） */
    handled: boolean;
}
export interface SlashCommandContext {
    to: string;
    contextToken?: string;
    baseUrl: string;
    token?: string;
    accountId: string;
    log: (msg: string) => void;
    errLog: (msg: string) => void;
}
/**
 * 尝试处理斜杠指令
 *
 * @returns handled=true 表示该消息已作为指令处理，不需要继续走 AI 管道
 */
export declare function handleSlashCommand(content: string, ctx: SlashCommandContext, receivedAt: number, eventTimestamp?: number): Promise<SlashCommandResult>;
//# sourceMappingURL=slash-commands.d.ts.map