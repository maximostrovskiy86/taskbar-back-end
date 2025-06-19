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

export const addTask = async (body) => {
	console.log("Body", body);
	
	const task = await Task.create({...body})
	return task;
};


// try {
// 	const result = await taskServices.createTask(userId, req.body);
// 	res.status(200).json({
// 		status: "success",
// 		code: 200,
// 		data: { task: result },
// 	});
// } catch (e) {
// 	console.error(e);
// 	next(e);
// }

export const updateTaskById = async (id, dataUpdate) => {
	console.log("dataUpdate", dataUpdate)
	if (!id || !dataUpdate) {
		throw new WrongParametersError(`Failed to update task with id ${id} not found.`);
	}
	
	const updatedTask = await Task.findByIdAndUpdate(id, dataUpdate, {
		new: true,
	});
	console.log('updatedTask', updatedTask)
	return updatedTask;
};

export const deleteTaskById = async (id) => {
	console.log("id", id)
	const deleteTask =  await Task.findByIdAndDelete(id);
	// console.log('deleteTask', deleteTask)
	return deleteTask;
	
};

// export const updateStatusContact = async (id, favorite) => {
// 	const contactUpdateStatus = await Task.findOneAndUpdate(id, {favorite}, {new: true});
// 	return contactUpdateStatus;
// }
