import crypto from 'crypto';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

    @Column()
    specification: string[]; // alterar para entidade

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