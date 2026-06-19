import { Router } from "express";
import { SubjectController } from "./subject.controller";


const router = Router();

router.get("/subject", SubjectController.getsubjects);
router.get("/subject/:id", SubjectController.getsubjectById);
router.get("/subject/class/:id", SubjectController.getsubjectByclassId);
router.post("/subject", SubjectController.addsubject);
router.patch("/subject/:id", SubjectController.updatesubject);
router.delete("/subject/:id", SubjectController.deletesubject);

export const Subjectroute = router;