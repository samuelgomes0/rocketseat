import { Express } from "express";

import TaskRoutes from "./task.route";

export default (server: Express) => {
  server.use("/tasks", TaskRoutes);
};
