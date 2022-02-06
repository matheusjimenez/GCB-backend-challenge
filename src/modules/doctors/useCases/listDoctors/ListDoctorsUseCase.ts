import { inject, injectable } from "tsyringe";
import { Doctor } from "../../entities/doctor";
import { IDoctorRepository } from "../../repositories/IDoctorRepository";


@injectable()
class ListDoctorsUseCase{
    constructor(
        @inject("DoctorsRepository")
        private doctorRepository : IDoctorRepository
    ) {}

    async execute(): Promise<Doctor[]>{
        return this.doctorRepository.list();
    }
}

export { ListDoctorsUseCase }