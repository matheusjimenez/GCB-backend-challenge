import { inject, injectable } from "tsyringe";
import { IDoctorRepository } from "../../repositories/IDoctorRepository";


@injectable()
class DisableDoctorUseCase{
    constructor(
        @inject("DoctorsRepository")
        private doctorRepository: IDoctorRepository
    ) {}

    async execute(crm: number): Promise<void>{
        const doctor = await this.doctorRepository.findByCRM(crm);

        if(!doctor)
            throw new Error("CRM not found!");
        
        await this.doctorRepository.softDelete(doctor);
    }

}

export { DisableDoctorUseCase }