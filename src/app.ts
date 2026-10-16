import express from "express";
import pinoHttp from "pino-http";
import { logger } from "./lib/logger";

export function createApp() {
    const app = express();
    app.use(express.json({ limit: "1mb" }));
    app.use(pinoHttp({ logger }));

    app.get("/health", (_req, res) => {
        res.json({ status: "ok" });
    });

    return app;
}