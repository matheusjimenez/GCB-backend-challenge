import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialCreate1644043140621 implements MigrationInterface {
    name = 'InitialCreate1644043140621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Specifications\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`doctorIdId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Doctors\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`crm\` int NOT NULL, \`phoneNumber\` int NOT NULL, \`cellPhone\` int NOT NULL, \`cep\` int NOT NULL, \`display\` tinyint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Specifications\` ADD CONSTRAINT \`FK_9d4783a64d240a25c80cd5c7f54\` FOREIGN KEY (\`doctorIdId\`) REFERENCES \`Doctors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Specifications\` DROP FOREIGN KEY \`FK_9d4783a64d240a25c80cd5c7f54\``);
        await queryRunner.query(`DROP TABLE \`Doctors\``);
        await queryRunner.query(`DROP TABLE \`Specifications\``);
    }

}
