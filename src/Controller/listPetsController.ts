import { Request, Response } from "express";
import {ListPets} from "../Service/listPets";

class ListPetsController{
    async handle(req: Request, res: Response){
        const owner_id = req.user
        
        const listPets = new ListPets();

        const Pets = await listPets.execute(owner_id)

        return res.json(Pets);
    }
}

export {ListPetsController};