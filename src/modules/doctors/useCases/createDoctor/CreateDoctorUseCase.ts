import { inject, injectable } from "tsyringe";
import { ICreateDoctorDTO } from "../../../DTOs/ICreateDoctorDTO";
import { IDoctorRepository } from "../../repositories/IDoctorRepository";


@injectable()
class CreateDoctorUseCase{
    constructor(
        @inject("DoctorsRepository")
        private doctorRepository: IDoctorRepository
    ) {}

    async execute({ name, crm, phoneNumber, cellPhone, cep, specification } : ICreateDoctorDTO): Promise<void>{
        const doctorAlreadyExists = await this.doctorRepository.findByCRM(crm);

        if(doctorAlreadyExists){
            throw new Error("CRM Already Taken Exists!");
        }

        await this.doctorRepository.create({
            name,
            crm,
            phoneNumber,
            cellPhone,
            cep,
            specification
        });
    }
}

export { CreateDoctorUseCase }