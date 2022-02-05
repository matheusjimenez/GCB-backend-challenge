import crypto from 'crypto';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Specification } from './specification';

@Entity("Doctors")
class Doctor{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    crm: number;

    @Column()
    phoneNumber?: number;

    @Column()
    cellPhone: number;

    @Column()
    cep: number;

    @OneToMany(()=> Specification, specification => specification.doctor_id)
    specification: Specification[];

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