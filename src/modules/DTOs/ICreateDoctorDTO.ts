import { Doctor_specification } from "../doctors/entities/doctor_specification";

interface ICreateDoctorDTO{
    id?: string;
    name: string;
    crm: number;
    phoneNumber: number;
    cellPhone: number;
    cep: number;
    specification: Doctor_specification[];
}

export { ICreateDoctorDTO }