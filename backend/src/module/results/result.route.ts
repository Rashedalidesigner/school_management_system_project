import { Router } from "express";
import { ResultController } from "./result.controller";



const router = Router();

router.get("/result", ResultController.getResults);
router.get("/result/:id", ResultController.getResultsbyId);
router.post("/result", ResultController.addResult);
router.patch("/result/:id", ResultController.updateResult);
router.delete("/result/:id", ResultController.deleteResult);

export const ResultRoute = router;