import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersController";
import { UserLoginController } from "../modules/users/useCases/userLogin/UserLoginController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const userLoginController = new UserLoginController();
const listUsersController = new ListUsersController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", userLoginController.handle);
userRoutes.get("/", listUsersController.handle)

export { userRoutes }