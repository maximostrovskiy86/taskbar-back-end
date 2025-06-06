import express from "express";

const routerApi = express.Router();
import {
	addTaskController,
	getTasksController,
	deleteTaskController,
	updateTaskController
} from "../controllers/taskController.js";
import {addTaskValidationSchema, updateTaskValidationSchema} from "../middleware/validationMiddleware.js";

routerApi.get('/', getTasksController)
routerApi.post('/', addTaskValidationSchema, addTaskController)
routerApi.put('/:id', updateTaskValidationSchema, updateTaskController)
routerApi.delete('/:id', deleteTaskController)

export default routerApi;