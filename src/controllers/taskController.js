import {nanoid} from "nanoid";

let tasks = [
	{
		"title": "Samuel Lee",
		"level": "Hard",
		"date": "12.06.2025",
		"id": 1
	},
	{
		"title": "Samuel Lee",
		"level": "Easy",
		"category": "Work",
		"id": 2
	},
	{
		"title": "Pusa",
		"level": "HARD",
		"category": "Pick",
		"id": 3
	},
];

const getTasks = (req, res, next) => {
	res.json({
		status: 'success',
		code: 200,
		tasks: tasks,
	});
}


const addTask = (req, res, next) => {
	const {title, category, complexity, level} = req.body;
	const task = {
		id: nanoid(),
		title,
		complexity,
		category,
		level,
		done: false
	};
	
	tasks.push(task);
	
	res.status(201).json({
		status: 'success',
		code: 201,
		task,
	});
}


const updateTask = (req, res, next) => {
	const {id} = req.params;
	const {title, level, category} = req.body;
	const [task] = tasks.filter(el => {
		return +el.id === +id;
	});
	
	task.title = title;
	task.level = level;
	task.category = category;
	task.pipa = 2;
	
	res.json({
		status: 'success',
		code: 200,
		data: task
	});
}

const deleteTask = (req, res, next) => {
	const {id} = req.params;
	const newtasks = tasks.filter(el => +el.id !== +id);
	tasks = [...newtasks];
	res.status(204).json();
}

export default {
	getTasks,
	addTask,
	updateTask,
	deleteTask,
}