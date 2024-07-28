// Native imports
import http from "http";

// 3rd party imports
import cors from "cors";
import helmet from "helmet";
import express from "express";
import compression from "compression";

// Project imports
import logger from "./common/logger.js";
import { getRouter } from "./routes/index.js";
import { requestError } from "./middlewares/index.js";

export class Server {
    private app = express();
    private server!: http.Server;

    constructor(private port: number) {}

    /**
     * Bootstrap server application by loading all of its components.
     */
    async bootstrap() {
        this.setupMiddlewares();
        this.setupRoutes();

        // Start server
        this.server = new http.Server(this.app);
        this.server.listen(this.port, () =>
            logger.info(`Server is running on port ${this.port}`)
        );
    }

    /**
     * Add middlewares to the express application.
     */
    private setupMiddlewares() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    /**
     * Add routers to the express application
     */
    private setupRoutes() {
        const router = getRouter();
        this.app.use("/api", router);
        this.app.use(requestError);
    }
}
