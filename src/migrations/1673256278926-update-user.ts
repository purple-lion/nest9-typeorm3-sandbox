import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUser1673256278926 implements MigrationInterface {
    name = 'updateUser1673256278926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
