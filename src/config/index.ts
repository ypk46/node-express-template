// 3rd party imports
import dotenv from "dotenv";

// Project imports
import { ConfigHelper as ch } from "../helpers/config.js";

dotenv.config();

export default {
    // Application params
    version: "0.1.0",
    name: ch.castStringValue("APP_NAME", "ninja-news-api"),
    env: ch.castStringValue("ENV", "dev"),
    port: ch.castNumericValue("PORT", 3000),
    skipRoutesRegex: [/\/api\/auth/, /\/api\/ping/],
};
