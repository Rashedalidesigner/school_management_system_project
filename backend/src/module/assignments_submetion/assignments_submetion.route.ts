import { Router } from "express";
import { assignmentSubmetionController } from "./assignments_submetion.controller";

const router = Router();

router.get("/assignment-submet", assignmentSubmetionController.getassignmentSubmetion);
router.get("/assignment-submetbyId/:id", assignmentSubmetionController.getassignmentSubmetionById);
router.get("/assignment-submetbystudent/:id", assignmentSubmetionController.getassignmentSubmetionBystudentId);
router.get("/assignment-submetbyassignment/:id", assignmentSubmetionController.getassignmentSubmetionByAssignmentId);
router.post("/assignment-submet", assignmentSubmetionController.createassignmentSubmetion);
router.patch("/assignment-submet/:id", assignmentSubmetionController.updateassignmentSubmetion);
router.delete("/assignment-submet/:id", assignmentSubmetionController.deleteassignmentSubmetion);



export const assignmentsSubmetionRoute = router;