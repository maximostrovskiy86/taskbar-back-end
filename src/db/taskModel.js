import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
		title: {type: String},
		level: String,
		category: String,
	},
	{versionKey: false, timestamps: true}
);

const Task = mongoose.model('tasks', taskSchema);

export default Task;

