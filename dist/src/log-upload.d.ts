import type { OpenClawConfig } from "openclaw/plugin-sdk/core";
/** Minimal subset of commander's Command used by registerWeixinCli. */
type CliCommand = {
    command(name: string): CliCommand;
    description(str: string): CliCommand;
    option(flags: string, description: string): CliCommand;
    action(fn: (...args: any[]) => void | Promise<void>): CliCommand;
};
/** Register the `openclaw openclaw-weixin logs-upload` CLI subcommand. */
export declare function registerWeixinCli(params: {
    program: CliCommand;
    config: OpenClawConfig;
}): void;
export {};
//# sourceMappingURL=log-upload.d.ts.map