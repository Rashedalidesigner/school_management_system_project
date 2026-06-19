import { Router } from "express";
import { TeacherController } from "./teacher.controller";


const router = Router();

router.get("/teacher", TeacherController.getTeachers);
router.get("/teacher/:id", TeacherController.getTeacherById);
router.post("/teacher", TeacherController.addTeacher);
router.put("/teacher/:id", TeacherController.updateTeacher);
router.delete("/teacher/:id", TeacherController.deleteTeacher);


export const TeacherRoute = router;