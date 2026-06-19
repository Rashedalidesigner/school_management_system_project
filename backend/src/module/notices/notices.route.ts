import { Router } from "express";
import { NoticesController } from "./notices.controller";

const router = Router();

router.get("/notice", NoticesController.getNotices);
router.get("/notice/:id", NoticesController.getNoticesbyId);
router.post("/notice", NoticesController.addNotice);
router.patch("/notice/:id", NoticesController.updateNotice);
router.delete("/notice/:id", NoticesController.deleteNotice);

export const noticeRoute = router;