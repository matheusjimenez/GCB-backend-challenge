import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateDoctorUseCase } from './CreateDoctorUseCase';

class CreateDoctorController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {
            name,
            crm,
            phoneNumber,
            cellPhone,
            cep,
            specification
         } = request.body;

         const createDoctorUseCase = container.resolve(CreateDoctorUseCase);

         createDoctorUseCase.execute( 
            {
                name, 
                crm, 
                phoneNumber, 
                cellPhone, 
                cep, 
                specification
            }
        )

        return response.status(201).send();
    }
}

export { CreateDoctorController }