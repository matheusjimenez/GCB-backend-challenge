import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DisableDoctorUseCase } from './DisableDoctorUseCase';

class DisableDoctorController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { crm } = request.body;

        const disableDoctorUseCase = container.resolve(DisableDoctorUseCase)

        disableDoctorUseCase.execute(crm);

        return response.status(200).send();
    }
}

export { DisableDoctorController }