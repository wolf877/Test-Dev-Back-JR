import { Request, Response } from "express";
import { AddPet } from "../Service/addPet";

class AddPetController{
    async handle(req:Request, res: Response){
        const {name, species} = req.body;

        const owner = req.user;

        const addPet = new AddPet();
        const Pet = await addPet.execute({name, species, owner});

        return res.json(Pet);
    }
}

export {AddPetController};