import {addTask, getTasks, deleteTask, updateStatusTask, updateTask} from "../services/tasksService.js";

export const getTasksController = async (req, res) => {
	console.log("req.userId", req.user);
	const {_id} = req.user;
	
	const tasks = await getTasks(_id);
	
	
	console.log("reqQQ", req.user);
	res.json({
		status: 'success',
		code: 200,
		tasks: tasks,
		// data: tasks,
	});
}

export const addTaskController = async (req, res) => {
	const {_id} = req.user;
	
	const result = await addTask(req.body, _id);
	
	
	res.status(201).json({
		status: "success",
		code: 200,
		task: result,
		// data: {task: result},
	});
}

export const updateTaskController = async (req, res) => {
	const postId = req.params.id;
	const data = req.body;
	const userId = req.user._id;
	console.log("req.body", req.body, postId, userId);
	
	const task = await updateTask(postId, data, userId)
	res.json({
		status: 'success',
		code: 201,
		task: task,
		// data: {contact: task},
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
	const status = req.body.completed;
	// const userId = req.user.id;
	console.log("req.body", req.body, status)
	
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