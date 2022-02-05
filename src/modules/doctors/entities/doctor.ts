import crypto from 'crypto';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Doctor_specification } from './doctor_specification';

@Entity("Doctors")
class Doctor{

    @PrimaryColumn()
    id: string;

    @Column({ length: 120})
    name: string;

    @Column({ width: 7 }) //MySQL only
    crm: number;

    @Column()
    phoneNumber?: number;

    @Column()
    cellPhone: number;

    @Column()
    cep: number;

    @OneToMany(type => Doctor_specification, specification => specification.doctor_id)
    specification: Doctor_specification[];

    @Column()
    display: boolean = true;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = crypto.randomUUID();
        }
    }
}

export { Doctor }