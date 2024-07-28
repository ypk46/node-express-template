// 3rd party imports
import { ParsedQs } from "qs";
import { Response } from "express";

export class Parser {
    /**
     * Parse API responses using a common format.
     * @param res Express response object
     * @param code HTTP status code
     * @param result Result payload in the response.
     * @returns
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static parseResponse(res: Response, code: number, result: any) {
        return res.status(code).json({ code, result });
    }

    /**
     * Cast query string to number.
     * @param value: Query string value.
     * @returns
     */
    static castQueryParamToInt(
        value: string | ParsedQs | string[] | ParsedQs[] | undefined,
        defaultValue = 0
    ) {
        const strValue = String(value);
        if (strValue && !Number.isNaN(parseInt(strValue, 10)))
            return parseInt(strValue, 10);
        return defaultValue;
    }
}
