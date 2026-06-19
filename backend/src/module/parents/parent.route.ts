import { Router } from "express";
import { ParentController } from "./parent.controller";



const router = Router();

router.get("/parent", ParentController.getParent);
router.get("/parent/:id", ParentController.getParentbyId);
router.post("/parent", ParentController.addParent);
router.patch("/parent/:id", ParentController.updateParent);
router.delete("/parent/:id", ParentController.deleteParent);

export const ParentRoute = router;