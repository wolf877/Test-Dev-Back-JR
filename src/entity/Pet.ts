import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryColumn, ManyToOne } from "typeorm";
import{v4 as uuid} from "uuid";

@Entity("Pets")
class Pet{
    @PrimaryColumn()
    readonly Id: string;

    @Column()
    Name: string;

    @Column()
    Specie: string;

    @Column()
    Owner: string;
    @JoinColumn({name: "Owner",})
    @ManyToOne(()=>Pet)
    owner: Pet;

    @CreateDateColumn()
    Added_at: Date;

    constructor(){
        if(!this.Id){
            this.Id = uuid();
        }
    }
}

export {Pet};