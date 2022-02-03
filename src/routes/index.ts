import { Router } from "express";

import { doctorsRoutes } from './doctors.routes'

const router = Router();

router.use("/doctors", doctorsRoutes);

export { router }