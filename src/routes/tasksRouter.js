import express from "express";

const taskRouter = express.Router();
import {asyncWrapper} from "../helpers/apiHelpers.js";
import {
	addTaskController,
	getTasksController,
	deleteTaskController,
	updateTaskController,
	updateStatusTaskController,
} from "../controllers/taskController.js";
// import {addTaskValidationSchema} from "../middleware/validationMiddleware.js";

taskRouter.get('/', asyncWrapper(getTasksController))
// taskRouter.get('/:id', asyncWrapper(findTaskByIdController))
// taskRouter.post('/', addTaskValidationSchema, asyncWrapper(addTaskController))
taskRouter.post('/', addTaskController)
// taskRouter.put('/:id', asyncWrapper(updateTaskController))
taskRouter.put('/:id', updateTaskController)
taskRouter.delete('/:id', deleteTaskController)
taskRouter.patch('/:id/status', updateStatusTaskController)
// taskRouter.delete('/:id', asyncWrapper(deleteTaskController))

export default taskRouter;