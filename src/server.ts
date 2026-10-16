import { createApp } from "./app";
import { env } from "./config";
import { logger } from "./lib/logger";

const app = createApp();
const server = app.listen(env.PORT, () => {
    logger.info(`API listening on :${env.PORT}`);
});

function shutdown(signal: string) {
    logger.info(`${signal} received, shutting down`);
    server.close(() => process.exit(0));
}
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));