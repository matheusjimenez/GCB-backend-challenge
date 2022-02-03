import { container } from "tsyringe";
import { IDoctorRepository } from "../../modules/doctors/repositories/IDoctorRepository";
import { DoctorsRepository } from "../../modules/doctors/repositories/implementations/DoctorsRepository";

container.registerSingleton<IDoctorRepository>(
    "DoctorsRepository", DoctorsRepository
);