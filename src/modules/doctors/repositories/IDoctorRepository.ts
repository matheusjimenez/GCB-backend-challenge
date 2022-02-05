import { ICreateDoctorDTO } from "../../DTOs/ICreateDoctorDTO";
import { Doctor } from "../entities/doctor";


interface IDoctorRepository{
    create(data: ICreateDoctorDTO): Promise<void>;
    findByCRM(crm: number): Promise<Doctor>;
    softDelete(doctor: Doctor): Promise<void>;
}

export { IDoctorRepository }