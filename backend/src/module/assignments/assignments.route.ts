import express, { Router } from "express";
import { assignmentsController } from "./assignmets.controller";

const router = Router();

router.get("/assinment", assignmentsController.getAssignments);
router.post("/assignment", assignmentsController.createAssignment);
router.get("/assignment/:id", assignmentsController.getAssignmentById);
router.patch("/assignment/:id", assignmentsController.updateAssignment);
router.delete("/assignment/:id", assignmentsController.deleteAssignment);

export const assignmentsRoute = router;