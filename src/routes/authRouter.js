import express from "express";
const authRouter = express.Router();
import {asyncWrapper} from "../helpers/apiHelpers.js";
import { registrationController, loginController} from "../controllers/authController.js";

authRouter.post('/registration', asyncWrapper(registrationController))
authRouter.post('/login', asyncWrapper(loginController))

export default authRouter;