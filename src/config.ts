import "dotenv/config";
import { z } from "zod";

const schema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.coerce.number().default(3000),
    LOG_LEVEL: z.string().default("info"),
    DATABASE_URL: z.string().default("postgres://reco:reco@localhost:5432/recohook"),
    REDIS_URL: z.string().default("redis://localhost:6379"),
});

export const env = schema.parse(process.env);