import { Router } from "express";
import { StudentParentsController } from "./student_parent.controller";


const router = Router();

router.get("/student-parent", StudentParentsController.getStudentParents);
router.get("/student-parent/:id", StudentParentsController.getStudentParentById);
router.post("/student-parent", StudentParentsController.addStudentParent);
router.patch("/student-parent/:id", StudentParentsController.updateStudentParent);
router.delete("/student-parent/:id", StudentParentsController.deleteStudentParent);


export const StudentParentroute = router;