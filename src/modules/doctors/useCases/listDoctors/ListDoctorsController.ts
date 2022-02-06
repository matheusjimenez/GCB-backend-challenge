import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListDoctorsUseCase } from './ListDoctorsUseCase';

class ListDoctorsController{
    async handle(request: Request, response: Response): Promise<Response>{
        const listDoctorsUseCase = container.resolve(ListDoctorsUseCase);

        const listData = await listDoctorsUseCase.execute();

        return response.status(200).json(listData);
    }

}

export { ListDoctorsController }