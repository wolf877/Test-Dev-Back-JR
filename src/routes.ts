import {Router} from "express";
import { CreateUserController } from "./Controller/createUserController";
import { LoginController } from "./Controller/loginController";
import{AddPetController} from "./Controller/addPetController";

import {ensure} from "./middleware/authentic";

const router = Router();

const createUser = new CreateUserController();
const login = new LoginController();
const addPet = new AddPetController();

router.post('/createUser', createUser.handle);
router.post('/login', login.handle);
router.post('/addPet', ensure, addPet.handle);

export {router};

