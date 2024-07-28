// 3rd party imports
import { Router } from "express";

// Project imports
import HealthRouter from "./health.js";

export const getRouter = () => {
    // Initialize express router
    const router = Router({ mergeParams: true });

    // Attach routes to main router
    router.use(HealthRouter());

    return router;
};
