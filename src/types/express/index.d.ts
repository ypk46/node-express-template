declare namespace Express {
    interface Request {
        logging: {
            method: string;
            body: string;
            url: string;
            query: any; // eslint-disable-line
            ip?: any; // eslint-disable-line
            err?: any; // eslint-disable-line
            stack?: any; // eslint-disable-line
        };
    }
}
