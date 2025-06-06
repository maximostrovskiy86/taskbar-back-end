import express from "express";
import cors from "cors";
import logger from 'morgan';
import routerApi from "./routes/tasksRouter.js";
import 'dotenv/config'

const app = express();


app.use(express.json());
app.use(cors());
app.use(logger('dev'))
app.use('/api/tasks', routerApi);


export default app;