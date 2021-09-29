import { Request, Response } from "express";
import {CreateUser} from "../Service/createUserService";

class CreateUserController{
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body;

        const createUserService = new CreateUser();

        const user = await createUserService.execute({name, email, password});

        return res.json(user);
    }
}

export {CreateUserController};
