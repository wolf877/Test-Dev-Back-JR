import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPets1632944330997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Pets",
                    columns: [
                        {
                            name: "Id",
                            type: "uuid",
                            isPrimary: true
                        }, 
                        {
                            name: "Name",
                            type: "varchar"
                        },
                        {
                            name: "Specie",
                            type: "varchar"
                        },
                        {
                            name: "Owner",
                            type: "varchar"
                        },
                        {
                            name: "Added_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],

                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Pets")
    }

}
