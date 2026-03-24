/** Dynamically change the minimum log level at runtime. */
export declare function setLogLevel(level: string): void;
export type Logger = {
    info(message: string): void;
    debug(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    /** Returns a child logger whose messages are prefixed with `[accountId]`. */
    withAccount(accountId: string): Logger;
    /** Returns the current main log file path. */
    getLogFilePath(): string;
    close(): void;
};
export declare const logger: Logger;
//# sourceMappingURL=logger.d.ts.map