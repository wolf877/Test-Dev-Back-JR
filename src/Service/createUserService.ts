import { getCustomRepository } from "typeorm";
import { UserRepository } from "../Repository/UserRepository";
import { hash } from "bcryptjs";

interface IUser{
    name: string;
    email: string;
    password: string;
}

class CreateUser{
    async execute({name, email, password}:IUser){
       const userRepository = getCustomRepository(UserRepository);

       if(!name || !email || !password){
           throw new Error("Fields invalid");
       };

       name = name.trim().toLowerCase();
       password = password.trim().toLowerCase();
       email = email.trim().toLowerCase();

       if(name.length == 0|| email.length == 0 || password.length == 0){
            throw new Error("Fields invalid");
        };

       const userAlreadyExists = await userRepository.findOne({
            Email: email           
       });

       if(userAlreadyExists){
           throw new Error("User already exists");
       };

       const passwordHash = await hash(password, 8);

       const user = userRepository.create({
           Name: name,
           Email: email,
           Password: passwordHash
       });

       await userRepository.save(user);

       return user;
    }
}

export {CreateUser};