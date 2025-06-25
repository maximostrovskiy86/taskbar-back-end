import Task from "../db/taskModel.js";
import {WrongParametersError} from "../helpers/error.js";

export const getTasks = async (userId) => {
	const tasks = await Task.find({userId});
	return tasks;
};


export const addTask = async (body, userId) => {
	const task = await Task.create({...body, userId})
	return task;
};


export const updateTask = async (taskId, dataUpdate, userId) => {
	if (!taskId || !dataUpdate) {
		throw new WrongParametersError(`Failed to update task with id ${taskId} not found.`);
	}
	
	const resultUpdatedTask = await Task.findOneAndUpdate(
		{_id: taskId, userId},
		{...dataUpdate},
		{new: true}
	);
	console.log('updatedTask', resultUpdatedTask)
	return resultUpdatedTask;
};

export const deleteTask = async (taskId, userId) => {
	console.log("idDEL", taskId, userId)
	const deleteTask = await Task.findOneAndDelete({_id: taskId, userId});
	return deleteTask;
	
};

export const updateStatusTask = async (taskId, userId, status) => {
	console.log("updateStatusTask", taskId, status)
	const result = await Task.findOneAndUpdate(
		{ _id: taskId, userId },
		{completed: status},
		{
			new: true,
		}
	);
	
	return result;
};

export const getTaskById = async (id) => {
	try {
		const task = await Task.findById(id);
		// if (!task) {
		// 	throw new WrongParametersError(`Failed to update task with id ${id} not found.`);
		// }
		
		return task;
		
	} catch (error) {
		console.log("ERROR", error.message);
		throw new WrongParametersError(`Failed to update task with id ${id} not found.`);
	}
}
