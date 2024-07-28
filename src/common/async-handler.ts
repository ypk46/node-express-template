// 3rd party imports
import { Request, Response, NextFunction } from "express";

/**
 * Handles async functions on Express routers, so they are
 * correctly redirected to the error handler.
 * @param fn
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncHandler = (fn: any) => {
    const newFn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res);
        } catch (error) {
            next(error);
        }
    };
    return newFn;
};
