import express from "express";
const taskRouter = express.Router();

import {asyncWrapper} from "../helpers/apiHelpers.js";
import {addTaskValidationSchema} from "../middleware/validationMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

import {
	addTaskController,
	getTasksController,
	deleteTaskController,
	updateTaskController,
	updateStatusTaskController,
} from "../controllers/taskController.js";

taskRouter.use(authMiddleware);

taskRouter.get('/', asyncWrapper(getTasksController))
taskRouter.post('/', addTaskValidationSchema, asyncWrapper(addTaskController))
taskRouter.put('/:id', addTaskValidationSchema, asyncWrapper(updateTaskController))
taskRouter.patch('/:id/status', updateStatusTaskController)
taskRouter.delete('/:id', asyncWrapper(deleteTaskController))

export default taskRouter;