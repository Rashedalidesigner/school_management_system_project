import { Router } from "express";
import { attendanceController } from "./attendance.controller";

const router = Router();

router.get("/attendance", attendanceController.getAttendance);
router.get("/attendance/:id", attendanceController.getAttendanceById);
router.get("/attendance/class/:id", attendanceController.getAttendanceByclassId);
router.get("/attendance/student/:id", attendanceController.getAttendanceBystudentId);
router.get("/attendance/date/:date", attendanceController.getAttendanceBydateId);
router.post("/attendance", attendanceController.createAttendance);
router.patch("/attendance/:id", attendanceController.updateAttendance);
router.delete("/attendance/:id", attendanceController.deleteAttendance);


export const attendanceRoute = router;