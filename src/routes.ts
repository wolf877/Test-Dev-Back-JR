import {Router} from "express";
import { CreateUserController } from "./Controller/createUserController";
import { LoginController } from "./Controller/loginController";
import{AddPetController} from "./Controller/addPetController";
import { ListPetsController } from "./Controller/listPetsController";

import {ensure} from "./middleware/authentic";

const router = Router();

const createUser = new CreateUserController();
const login = new LoginController();
const addPet = new AddPetController();
const listPets = new ListPetsController();

router.post('/createUser', createUser.handle);
router.post('/login', login.handle);
router.post('/addPet', ensure, addPet.handle);

router.get('/Pets', ensure, listPets.handle)

export {router};

