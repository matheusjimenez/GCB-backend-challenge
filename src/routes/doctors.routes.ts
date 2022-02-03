import { Router } from "express";
import { CreateDoctorController } from "../modules/doctors/useCases/createDoctor/CreateDoctorController";

const doctorsRoutes = Router();

const createDoctorController = new CreateDoctorController();

doctorsRoutes.post("/", createDoctorController.handle);

export { doctorsRoutes }