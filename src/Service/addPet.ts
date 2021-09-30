import { getCustomRepository } from "typeorm";
import { PetRepository } from "../Repository/PetRepository";
import {UserRepository} from "../Repository/UserRepository";

interface IPet{
    name: string;
    species: string;
    owner: string;
}

class AddPet{
    async execute({name, species, owner}:IPet){
        const petRepository = getCustomRepository(PetRepository);
        const userRepository = getCustomRepository(UserRepository);

        if(!name || !species){
            throw new Error("Fields invalid"); 
        }

        name = name.trim().toLowerCase();
        species = species.trim().toLowerCase();
        

        if(name.length == 0 || species.length == 0){
            throw new Error("Fields invalid");
        }

        const {Email} = await userRepository.findOne({ 
            Id: owner
        })

        const pet = petRepository.create({
            Name: name,
            Specie: species,
            Owner: Email
        })
        
        await petRepository.save(pet)
        console.log(pet)
        return pet
    }
}

export {AddPet};