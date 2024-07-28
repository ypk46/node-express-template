// 3rd party imports
import "reflect-metadata";

// Project imports
import { Server } from "./server.js";

const server = new Server(3000);
server.bootstrap();
