import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1632925372025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Users",
                    columns: [
                        {
                            name: "Id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "Name",
                            type: "varchar",
                        },
                        {
                            name: "Email",
                            type: "varchar"
                        },
                        {
                            name: "Password",
                            type: "varchar"
                        },
                        {
                            name: "Created-at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
