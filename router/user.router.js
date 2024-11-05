import { Router } from "express";
import { createUser, logIn, updateUser } from "../controller/user.controller.js";


const userRouter = Router();

userRouter.route('/create').post(createUser);
userRouter.route('/').get(logIn);
userRouter.route('/update/:id').post(updateUser);

export default userRouter;