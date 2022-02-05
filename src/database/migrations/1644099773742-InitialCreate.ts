import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialCreate1644099773742 implements MigrationInterface {
    name = 'InitialCreate1644099773742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Doctors\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(120) NOT NULL, \`crm\` int(7) NOT NULL, \`phoneNumber\` int NOT NULL, \`cellPhone\` int NOT NULL, \`cep\` int NOT NULL, \`display\` tinyint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Specifications\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Doctor_specifications\` (\`id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`doctorIdId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Doctor_specifications\` ADD CONSTRAINT \`FK_d750313b8afdbe782d85e3542a2\` FOREIGN KEY (\`doctorIdId\`) REFERENCES \`Doctors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Doctor_specifications\` DROP FOREIGN KEY \`FK_d750313b8afdbe782d85e3542a2\``);
        await queryRunner.query(`DROP TABLE \`Doctor_specifications\``);
        await queryRunner.query(`DROP TABLE \`Specifications\``);
        await queryRunner.query(`DROP TABLE \`Doctors\``);
    }

}
