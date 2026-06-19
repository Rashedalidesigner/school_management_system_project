import { Router } from "express";
import { assignmentSubmetionController } from "./assignments_submetion.controller";

const router = Router();

router.get("/assignment-submet", assignmentSubmetionController.getassignmentSubmetion);
router.get("/assignment-submetbyId/:id", assignmentSubmetionController.getassignmentSubmetion);
router.get("/assignment-submetbystudent/:id", assignmentSubmetionController.getassignmentSubmetion);
router.get("/assignment-submetbyassignment/:id", assignmentSubmetionController.getassignmentSubmetion);
router.post("/assignment-submet", assignmentSubmetionController.getassignmentSubmetion);
router.patch("/assignment-submet", assignmentSubmetionController.getassignmentSubmetion);
router.delete("/assignment-submet", assignmentSubmetionController.getassignmentSubmetion);



export const assignmentsSubmetionRoute = router;