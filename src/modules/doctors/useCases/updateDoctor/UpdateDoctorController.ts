import { Request, Response } from 'express';

class UpdateDoctorController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { 
            name,
            crm,
            phoneNumber,
            cellPhone,
            cep
         } = request.body;

        return response.status(200).send();
    }

}

export { UpdateDoctorController }