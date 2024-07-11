import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Essai1720688001512 implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<void> {await queryRunner.createTable(
            new Table({
                name: "essai",
                columns: [
                    {
                        name: "id",
                        type: "varchar(36)",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("essai")
    }

}
