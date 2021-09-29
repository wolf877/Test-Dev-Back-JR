import { EntityRepository, Repository } from "typeorm";
import { Pet } from "../entity/Pet";

@EntityRepository(Pet)
class PetRepository extends Repository<Pet> {}

export {PetRepository};