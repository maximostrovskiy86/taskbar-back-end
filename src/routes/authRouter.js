import express from "express";
const authRouter = express.Router();
import {asyncWrapper} from "../helpers/apiHelpers.js";
import { registrationController, loginController} from "../controllers/authController.js";
// import {addTaskValidationSchema} from "../middleware/validationMiddleware.js";


// authRouter.post('/registration', addTaskValidationSchema, asyncWrapper(registrationController))
authRouter.post('/registration', asyncWrapper(registrationController))
authRouter.post('/login', asyncWrapper(loginController))

export default authRouter;