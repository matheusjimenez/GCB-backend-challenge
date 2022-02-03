import { ICreateDoctorDTO } from "../../DTOs/ICreateDoctorDTO";


interface IDoctorRepository{
    create(data: ICreateDoctorDTO): Promise<void>;
}

export { IDoctorRepository }