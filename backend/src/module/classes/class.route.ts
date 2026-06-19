import express, { Router } from "express";
import { classController } from "./class.controller";

const router = Router();

router.get("/class", classController.getclass);
router.get("/class/:id", classController.getclassById);
router.post("/class", classController.createclass);
router.patch("/class/:id", classController.updateclass);
router.delete("/class/:id", classController.deleteclass);

export const classRoute = router;