import { getCustomRepository } from "typeorm";
import {UserRepository} from "../Repository/UserRepository";
import { PetRepository } from "../Repository/PetRepository";

class ListPets{
    async execute(owner_id:string){
        const userRepository = getCustomRepository(UserRepository);
        const petRepository = getCustomRepository(PetRepository);

        const {Email} = await userRepository.findOne({
            Id: owner_id,
        });

        const Pets = await petRepository.find({
            where:{
                Owner: Email,
            }
        });

        return Pets
    }
}

export {ListPets}