import { Router } from "express";
import { examController } from "./exam.controller";

const router = Router();

router.get("/exam", examController.getexam);
router.get("/exam/:id", examController.getexambyId);
router.post("/exam", examController.createexam);
router.patch("/exam/:id", examController.updateexam);
router.delete("/exam/:id", examController.deleteexam);

export const examRoute = router;