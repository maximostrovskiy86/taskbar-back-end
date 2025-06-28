import express from "express";
import cors from "cors";
import logger from 'morgan';
import taskRouter from "./routes/tasksRouter.js";
import authRouter from "./routes/authRouter.js";
import {errorHandler} from "./helpers/apiHelpers.js";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/api/tasks', taskRouter);
app.use('/api/auth', authRouter);

app.use(errorHandler);


export default app;