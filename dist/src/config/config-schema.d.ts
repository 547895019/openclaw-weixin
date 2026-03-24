import { z } from "zod";
/** Top-level weixin config schema (token is stored in credentials file, not config). */
export declare const WeixinConfigSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    baseUrl: z.ZodDefault<z.ZodString>;
    cdnBaseUrl: z.ZodDefault<z.ZodString>;
    routeTag: z.ZodOptional<z.ZodNumber>;
    accounts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        baseUrl: z.ZodDefault<z.ZodString>;
        cdnBaseUrl: z.ZodDefault<z.ZodString>;
        routeTag: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    logUploadUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=config-schema.d.ts.map