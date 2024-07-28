// 3rd party imports
import { createLogger, format, transports } from "winston";

// Project imports
import config from "../config/index.js";

// Create custom logging format
const customFormat = format.combine(
    format.timestamp({
        format: "YYYY-MM-DD hh:mm:ss a",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
);

// Create transports
const customTransports = [new transports.Console()];

export const logger = createLogger({
    level: config.env !== "prd" ? "debug" : "info",
    format: customFormat,
    transports: customTransports,
});

export default logger;
