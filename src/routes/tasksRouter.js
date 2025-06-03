import express from "express";

const routerApi = express.Router();
import getTasksController from "../controllers/taskController";



routerApi
	.get('/tasks', getTasksController.getTasks)
	.post('/tasks', getTasksController.addTask)
	.put('/tasks/:id', getTasksController.updateTask)
	.delete('/tasks/:id', getTasksController.deleteTask)

export default routerApi;