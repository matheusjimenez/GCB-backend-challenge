import { CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Doctor } from "./doctor";
import { Specification } from "./specification";

@Entity("Doctor_specifications")
class Doctor_specification{

    @PrimaryColumn()
    id: string;

    @ManyToOne(type => Doctor, doctor => doctor.specification)
    doctor_id: Doctor;

    @OneToOne(type => Specification, specification => specification.id)
    specification_id: Specification;

    @CreateDateColumn()
    created_at: Date;
}

export { Doctor_specification }