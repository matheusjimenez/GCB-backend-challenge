interface ICreateDoctorDTO{
    name: string;
    crm: number;
    phoneNumber: number;
    cellPhone: number;
    cep: number;
    specification: string[];
}

export { ICreateDoctorDTO }