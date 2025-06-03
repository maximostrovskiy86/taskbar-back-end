import express from "express";
const routerApi = express.Router();
import getTasksController from "../controllers/taskController.js";
import {addTaskValidationSchema, updateTaskValidationSchema} from "../middleware/validationMiddleware.js";

routerApi
	.get('/tasks', getTasksController.getTasks)
	.post('/tasks', addTaskValidationSchema, getTasksController.addTask)
	.put('/tasks/:id', updateTaskValidationSchema, getTasksController.updateTask)
	.delete('/tasks/:id', getTasksController.deleteTask)

export default routerApi;