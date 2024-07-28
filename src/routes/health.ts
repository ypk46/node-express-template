// 3rd party imports
import { Router } from "express";
import { Container } from "typedi";

// Project imports
import { asyncHandler } from "../common/async-handler.js";
import { HealthController } from "../controllers/health.js";

export const setup = () => {
    // Initialize express router
    const router = Router({ mergeParams: true });

    // Get controller instance
    const ctrl = Container.get(HealthController);

    // Set endpoint routes
    router.get("/ping", asyncHandler(ctrl.ping));

    return router;
};

export default setup;
