// 3rd party imports
import { NextFunction, Request, Response } from "express";

// Project imports
import logger from "../common/logger.js";

export const requestError = (
    err: any, // eslint-disable-line
    req: Request,
    res: Response,
    next: NextFunction // eslint-disable-line
) => {
    // Check if request logging entry exists
    if (!req.logging) {
        req.logging = {
            body: "",
            query: req.query,
            method: req.method,
            url: req.originalUrl,
        };
    }

    // Add error details to logging entry
    if (err && err.message && err.stack) {
        req.logging.err = err.message;
        req.logging.stack = err.stack;
    } else {
        req.logging.err = err;
    }

    logger.error(req.logging);

    // Handle default error
    const code = 500;
    const msg =
        "Something went wrong, please contact the system administrator.";
    res.status(code).json({ code, result: { msg } });
};

export default requestError;
