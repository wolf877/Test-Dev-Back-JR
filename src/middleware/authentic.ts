import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken";

interface IEnsure{
    sub: string;
}

export function ensure(req: Request, res: Response, next: NextFunction){
    const AuthToken = req.headers.authorization;

    if(!AuthToken){
        return res.status(401).end();
    }

    const [, token] = AuthToken.split(" ");

    try {
        const { sub } = verify(token, process.env.HASH);
        req.user = sub
    }catch (err) {
        return res.status(401).end();
    }

    return next();
}