import { Router } from "express";
import { CreateDoctorController } from "../modules/doctors/useCases/createDoctor/CreateDoctorController";
import { DisableDoctorController } from "../modules/doctors/useCases/disableDoctor/DisableDoctorController";
import { ListDoctorsController } from "../modules/doctors/useCases/listDoctors/ListDoctorsController";
import { findAdress } from '../utils/CEP_Search'

const doctorsRoutes = Router();

const createDoctorController = new CreateDoctorController();
const disableDoctorController = new DisableDoctorController();
const listDoctorsController = new ListDoctorsController();

doctorsRoutes.post("/", createDoctorController.handle);
doctorsRoutes.patch("/", disableDoctorController.handle);
doctorsRoutes.get("/", listDoctorsController.handle);


//----------------PROOF OF CONCEPT----------------//
doctorsRoutes.post("/correio", async (request, response)=>{
    const { cep } = request.body;

    try{
        const adress = await findAdress(cep);
        const data = await adress.data;

        return response.status(200).json(data);
    }catch(err){
        return response.status(400).send({ message: err.toString() });
    }
});
//----------------PROOF OF CENCEPT END----------------//

export { doctorsRoutes }