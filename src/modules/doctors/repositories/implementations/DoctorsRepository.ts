import { getManager, getRepository, Repository } from "typeorm";
import { ICreateDoctorDTO } from "../../../DTOs/ICreateDoctorDTO";
import { Doctor } from "../../entities/doctor";
import { IDoctorRepository } from "../IDoctorRepository";
import crypto from 'crypto';
import { Doctor_specification } from "../../entities/doctor_specification";


class DoctorsRepository implements IDoctorRepository{
    private repository: Repository<Doctor>;

    constructor(){
        this.repository = getRepository(Doctor);
    }
    async findByCRM(crm: number): Promise<Doctor> {
        return await this.repository.findOne({crm});
    }

    async softDelete(doctor: Doctor): Promise<void>{
        Object.assign(doctor, {
            display: false
        });

        await this.repository.save(doctor);
    }

    async list(): Promise<Doctor[]>{
        return await this.repository.find(
            {
                where: { display: true }
            }
        )
    }

    async create(data: ICreateDoctorDTO): Promise<void> {
        const doctor_id = crypto.randomUUID();

        await getManager().transaction(async transactionalEntityManager => {
            // const specifications: Doctor_specification[] = [];

            // data.specification.forEach(specification=>{
            //     const doc_spec = new Doctor_specification();

            //     doc_spec.id = crypto.randomUUID();
            //     doc_spec.specification_id = specification.specification_id
                
            //     specifications.push(doc_spec);
            // });

            const doctor = this.repository.create(
                {
                    name: data.name,
                    crm: data.crm,
                    cellPhone: data.cellPhone,
                    phoneNumber: data.phoneNumber,
                    cep: data.cep,
                    display: true,
                }
            );

            // await transactionalEntityManager.save(specifications);
            await transactionalEntityManager.save(doctor);
        });
    }

}

export { DoctorsRepository }