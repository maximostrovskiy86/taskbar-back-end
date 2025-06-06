import {addTask, getTasks, deleteTaskById, updateTaskById, getTaskById} from "../services/tasksService.js";

export const getTasksController = async (req, res) => {
	const tasks = await getTasks();
	console.log("getTasksController", getTasksController);
	res.json({
		status: 'success',
		code: 200,
		tasks: tasks,
	});
}

export const addTaskController = async (req, res) => {
	const {title, category, level} = req.body;
	
	const task = await addTask(title, category, level);
	res.status(201).json({
		status: 'success',
		code: 201,
		task,
	});
}

export const updateTaskController = async (req, res) => {
	const {id} = req.params;
	const {title, level, category} = req.body;
	
	await updateTaskById(id, {title, level, category})
	res.json({
		status: 'success',
		code: 200,
	});
}

export const deleteTaskController = async (req, res) => {
	const {id} = req.params;
	const deletedTask = await deleteTaskById(id);
	
	res.status(204).json({
		status: 'success',
		code: 204,
		deletedTask,
	});
}

export const findTaskByIdController = async (req, res) => {
	const {id} = req.params;
	const task = await getTaskById(id);
	
	res.status(200).json({
		status: 'success',
		code: 200,
		task,
	})
}