import { Router } from "express";
import Database from "../database";

const router = Router();

const database = new Database();

// GET tasks/
router.get("/", (request, response) => {
  const tasks = database.listTASKS();

  response.status(200).send(tasks);
});

// GET tasks/:id
router.get("/:id", (request, response) => {
  const { id } = request.params;

  if (!id) {
    response.status(400).send("Task ID is required");
    return;
  }

  const task = database.findTaskById(id);

  if (!task) {
    response.status(404).send("Task not found");
  } else {
    response.status(200).send(task);
  }
});

// POST tasks/
router.post("/", (request, response): void => {
  const { title, description } = request.body;

  if (!title || !description) {
    response.status(400).send("Title and description are required");
    return;
  }

  const task = {
    title,
    description,
  };

  database.createTask(task);
  response.status(201).send({ message: "Task created" });
});

// DELETE tasks/:id
router.delete("/:id", (request, response) => {
  const { id } = request.params;

  if (!id) {
    response.status(400).send("Task ID is required");
    return;
  }

  database.deleteTask(id);

  response.status(204).send({ message: "Task deleted" });
});

// PATCH tasks/:id/complete
router.patch("/:id/complete", (request, response) => {
  const { id } = request.params;

  if (!id) {
    response.status(400).send("Task ID is required");
    return;
  }

  database.completeTask(id);

  response.status(200).send({ message: "Task completed" });
});

export default router;
