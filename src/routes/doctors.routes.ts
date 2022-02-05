import { Router } from "express";
import { CreateDoctorController } from "../modules/doctors/useCases/createDoctor/CreateDoctorController";
import { DisableDoctorController } from "../modules/doctors/useCases/disableDoctor/DisableDoctorController";

const doctorsRoutes = Router();

const createDoctorController = new CreateDoctorController();
const disableDoctorController = new DisableDoctorController();

doctorsRoutes.post("/", createDoctorController.handle);
doctorsRoutes.patch("/", disableDoctorController.handle);

export { doctorsRoutes }