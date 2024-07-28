// 3rd party imports
import { Service } from "typedi";
import { Request, Response } from "express";

// Project imports
import config from "../config/index.js";
import { Parser } from "../helpers/parser.js";

@Service()
export class HealthController {
    /**
     * Health check endpoint
     */
    ping(_: Request, res: Response) {
        return Parser.parseResponse(res, 200, {
            version: config.version,
            msg: "pong",
        });
    }
}
