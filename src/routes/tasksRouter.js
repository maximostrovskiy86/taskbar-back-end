import express from "express";

const routerApi = express.Router();
import {asyncWrapper} from "../helpers/apiHelpers.js";
import {
	addTaskController,
	getTasksController,
	deleteTaskController,
	updateTaskController,
	updateStatusTaskController,
} from "../controllers/taskController.js";
// import {addTaskValidationSchema} from "../middleware/validationMiddleware.js";

routerApi.get('/', asyncWrapper(getTasksController))
// routerApi.get('/:id', asyncWrapper(findTaskByIdController))
// routerApi.post('/', addTaskValidationSchema, asyncWrapper(addTaskController))
routerApi.post('/', addTaskController)
// routerApi.put('/:id', asyncWrapper(updateTaskController))
routerApi.put('/:id', updateTaskController)
routerApi.delete('/:id', deleteTaskController)
routerApi.patch('/:id/status', updateStatusTaskController)
// routerApi.delete('/:id', asyncWrapper(deleteTaskController))

export default routerApi;