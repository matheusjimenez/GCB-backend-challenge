import { getRepository, Repository } from "typeorm";
import { ICreateDoctorDTO } from "../../../DTOs/ICreateDoctorDTO";
import { Doctor } from "../../entities/doctor";
import { IDoctorRepository } from "../IDoctorRepository";


class DoctorsRepository implements IDoctorRepository{
    private repository: Repository<Doctor>;

    constructor(){
        this.repository = getRepository(Doctor);
    }

    async create(data: ICreateDoctorDTO): Promise<void> {
        const doctor = this.repository.create(
            {
                name: data.name,
                crm: data.crm,
                cellPhone: data.cellPhone,
                phoneNumber: data.phoneNumber,
                specification: data.specification,
                cep: data.cep,
                display: true,
            }
        );

        this.repository.save(doctor);
    }

}

export { DoctorsRepository }