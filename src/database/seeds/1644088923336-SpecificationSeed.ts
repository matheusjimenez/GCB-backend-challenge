import { MigrationInterface, QueryRunner } from "typeorm";

export class SpecificationSeed1644088923336 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert("Specifications",
            [
                {
                    id: 1,
                    name: "Alergologia"
                },
                {
                    id: 2,
                    name: "Angiologia"
                },
                {
                    id: 3,
                    name: "Buco maxilo"
                },
                {
                    id: 4,
                    name: "Cardiologia clínca"
                },
                {
                    id: 5,
                    name: "Cardiologia infantil"
                },
                {
                    id: 6,
                    name: "Cirurgia cabeça e pescoço"
                },
                {
                    id: 7,
                    name: "Cirurgia cardíaca"
                },
                {
                    id: 8,
                    name: "Cirurgia de tórax"
                },
            ]
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable("Specifications");
    }

}
