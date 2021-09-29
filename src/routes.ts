import {Router} from "express";
import { CreateUserController } from "./Controller/createUserController";

const router = Router();

const createUser = new CreateUserController();

router.post('/createUser', createUser.handle);

export {router};

