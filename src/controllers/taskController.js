import {addTask, getTasks, deleteTask, updateStatusTask, updateTask} from "../services/tasksService.js";

export const getTasksController = async (req, res) => {
	const {_id} = req.user;
	
	const tasks = await getTasks(_id);
	res.json({
		status: 'success',
		code: 200,
		tasks: tasks,
	});
}

export const addTaskController = async (req, res, next) => {
	const {_id} = req.user;
	
	try {
		const result = await addTask(req.body, _id);
		
		res.status(201).json({
			status: "success",
			code: 200,
			task: result,
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
}

export const updateTaskController = async (req, res) => {
	const postId = req.params.id;
	const data = req.body;
	const userId = req.user._id;
	
	const task = await updateTask(postId, data, userId)
	res.json({
		status: 'success',
		code: 201,
		task: task,
	});
}

export const deleteTaskController = async (req, res) => {
	const taskId = req.params.id;
	const userId = req.user._id;
	const deletedTask = await deleteTask(taskId, userId);
	
	if (!deletedTask) {
		return res.status(404).json({
			status: "error",
			code: 404,
			message: `Not found task with such id: ${taskId}`,
		});
	}
	
	res.json({
		status: 'success',
		code: 204,
		task: deletedTask,
	});
}

export const updateStatusTaskController = async (req, res, next) => {
	const taskId = req.params.id;
	const userId = req.user._id;
	const status = req.body.status;
	
	try {
		const resultUpdateStatus = await updateStatusTask(taskId, userId, status);
		
		if (!resultUpdateStatus) {
			return res.status(404).json({
				status: "error",
				code: 404,
				message: `Not found task id: ${taskId}`,
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