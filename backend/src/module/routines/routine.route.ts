import { Router } from "express";
import { RoutineController } from "./routine.controller";


const router = Router();

router.get("/routine", RoutineController.getRoutines);
router.get("/routine/:is", RoutineController.getRoutinesbyId);
router.post("/routine", RoutineController.addRoutine);
router.patch("/routine/:id", RoutineController.updateRoutine);
router.delete("/routine/:id", RoutineController.deleteRoutine);

export const RoutineRoute = router;
