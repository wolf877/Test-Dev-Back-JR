import {Router} from "express";
import { CreateUserController } from "./Controller/createUserController";
import { LoginController } from "./Controller/loginController";

const router = Router();

const createUser = new CreateUserController();
const login = new LoginController();

router.post('/createUser', createUser.handle);
router.post('/login', login.handle);

export {router};

