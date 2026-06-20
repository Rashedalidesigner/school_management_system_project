import { Router } from "express";
import { FeesController } from "./fees.controller";



const router = Router();

router.get("/fees", FeesController.getFees);
router.get("/fees/:id", FeesController.getFeesById);
router.post("/fees", FeesController.addFees);
router.patch("/fees/:id", FeesController.updateFees);
router.delete("/fees/:id", FeesController.deleteFees);

export const FeesRoute = router;