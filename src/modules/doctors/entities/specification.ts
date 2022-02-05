import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Doctor_specification } from "./doctor_specification";

@Entity("Specifications")
class Specification{
    @PrimaryGeneratedColumn()
    @OneToOne(()=> Doctor_specification, specification => specification.specification_id)
    id: number;

    @Column()
    name: string;
}

export { Specification }