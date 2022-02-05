import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Doctor } from "./doctor";

@Entity("Specifications")
class Specification{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToOne(()=> Doctor, doctor_id => doctor_id.specification)
    doctor_id: Doctor;
}

export { Specification }