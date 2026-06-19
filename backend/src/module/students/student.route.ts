import express, { Router } from "express";
import { studentController } from "./student.controller";

const router = Router();

router.get("/student", studentController.getstudents);
router.get("/student/:id", studentController.getstudentById);
router.get("/student/class/:id", studentController.getstudentByclassId);
router.post("/student", studentController.createstudent);
router.patch("/student/:id", studentController.updatestudent);
router.delete("/student/:id", studentController.deletestudent);


export const studentRoute = router;