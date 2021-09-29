import { getCustomRepository } from "typeorm";
import { UserRepository } from "../Repository/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface ILogin{
    email: string;
    password: string;
}

class LoginService{
    async execute({email, password}:ILogin){
        const userRepository = getCustomRepository(UserRepository);

        email = email.trim().toLowerCase();

        const user = await userRepository.findOne({
            Email: email
        });

        if(!user){
            throw new Error("email/password is incorrect");
        }

        const passwordMatch = await compare(password, user.Password);

        if(!passwordMatch){
            throw new Error("email/password is incorrect");
        }

        const token = sign({
            email: user.Email
        }, process.env.HASH, { 
            subject: user.Id,
            expiresIn: "1d"
        })

        return token;
    }
}

export {LoginService}