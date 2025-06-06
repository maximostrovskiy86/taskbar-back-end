import Task from "../db/taskModel.js";
import {WrongParametersError} from "../helpers/error.js";

export const getTasks = async () => {
	const tasks = await Task.find();
	return tasks;
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

export const addTask = async (title, category, level) => {
	const task = await Task.create({title, category, level})
	return task;
};

export const updateTaskById = async (id, {title, level, category}) => {
	
	const taskUpdate = await Task.findByIdAndUpdate(id, {title, level, category});
	if (!taskUpdate) {
		throw new WrongParametersError(`Failed to update task with id ${id} not found.`);
	}
};

export const deleteTaskById = async (id) => {
	const deletedTask = await Task.findByIdAndDelete(id);
	return deletedTask;
};

// export const updateStatusContact = async (id, favorite) => {
// 	const contactUpdateStatus = await Task.findOneAndUpdate(id, {favorite}, {new: true});
// 	return contactUpdateStatus;
// }
