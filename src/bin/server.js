import express from "express";
import logger from "morgan";
import cors from "cors";

const port = 8080

const app = express();

app.use(express.json());
app.use(cors());


app.get('/tasks', (req, res) => {
	res.send({
		status: "success",
		code: 200,
		tasks: [
			{
				"title": "Samuel Lee",
				"level": "Hard",
				"date": "12.06.2025",
				"category": "Healthy",
				"id": 1
			},
			{
				"title": "Samuel Lee",
				"level": "Easy",
				"date": "12.06.2025",
				"category": "Work",
				"id": 2
			},
			{
				"title": "Samuel Lee",
				"level": "Middle",
				"date": "12.06.2025",
				"category": "Hard",
				"id": 3
			},
			{
				"title": "Samuel Lee",
				"level": "Middle",
				"date": "12.06.2025",
				"category": "Study",
				"id": 4
			},
		]
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


