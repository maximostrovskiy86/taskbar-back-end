import {addTask, getTasks, deleteTask, updateStatusTask, updateTask} from "../services/tasksService.js";

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
	const result = await addTask(req.body);
	
	res.status(201).json({
		status: "success",
		code: 200,
		task: result,
		// data: {task: result},
	});
}

export const updateTaskController = async (req, res) => {
	const {id} = req.params;
	const data = req.body;
	console.log("req.body", req.body, id);
	
	const task = await updateTask(id, data)
	res.json({
		status: 'success',
		code: 201,
		task: task,
		// data: {contact: task},
		
	});
}

export const deleteTaskController = async (req, res) => {
	const {id} = req.params;
	const deletedTask = await deleteTask(id);
	
	if (!deletedTask) {
		return res.status(404).json({
			status: "error",
			code: 404,
			message: `Not found task with such id: ${id}`,
		});
	}
	
	res.json({
		status: 'success',
		code: 204,
		task: deletedTask,
	});
}

export const updateStatusTaskController = async (req, res, next) => {
	const { id } = req.params;
	const { status } = req.body;
	// const userId = req.user.id;
	
	try {
		const resultUpdateStatus = await updateStatusTask(id, status);
		
		if (!resultUpdateStatus) {
			return res.status(404).json({
				status: "error",
				code: 404,
				message: `Not found task id: ${id}`,
			});
		}
		
		res.json({
			status: "success",
			code: 201,
			task: resultUpdateStatus,
			
		});
	} catch (e) {
		console.error(e);
		next(e);
	}
};