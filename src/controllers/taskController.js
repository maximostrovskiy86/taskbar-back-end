import {addTask, getTasks, deleteTaskById, updateTaskById, getTaskById} from "../services/tasksService.js";

export const getTasksController = async (req, res) => {
	const tasks = await getTasks();
	console.log("getTasksController", getTasksController);
	res.json({
		status: 'success',
		code: 200,
		tasks: tasks,
		// data: tasks,
		
	});
}

export const addTaskController = async (req, res) => {
	// const {title, category, level} = req.body;
	
	const result = await addTask(req.body);
	res.status(201).json({
		status: "success",
		code: 200,
		// data: {task: result},
		task: result,
	});
}

export const updateTaskController = async (req, res) => {
	const {id} = req.params;
	const data = req.body;
	console.log("req.body", req.body, id);
	
	const updateTask = await updateTaskById(id, data)
	res.json({
		status: 'success',
		code: 201,
		task: updateTask,
		// data: { contact: updateTask },
		
	});
	
	console.log("updateTask", updateTask)
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