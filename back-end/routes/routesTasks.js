import express from "express";
import {
  createTask,
  listTasks,
  searchById,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/tarefas", createTask);
router.get("/tarefas", listTasks);
router.get("/tarefas/:id", searchById);
router.delete("/tarefas/:id", deleteTask);
router.put("/tarefas/:id", updateTask);

export default router;
