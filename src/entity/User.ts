import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Users")
class User{
    @PrimaryColumn()
    readonly Id: string;

    @Column()
    Name: string;

    @Column()
    Email: string;

    @Column()
    Password: string;

    @CreateDateColumn()
    Created_at: Date;

    constructor(){
        if(!this.Id){
            this.Id = uuid();
        }
    }
}

export {User}