import express, { type Request, type Response } from "express";
import { assignmentsRoute } from "./module/assignments/assignments.route";
import { classRoute } from "./module/classes/class.route";
import { assignmentsSubmetionRoute } from "./module/assignments_submetion/assignments_submetion.route";
import { attendanceRoute } from "./module/attendance/attendance.route";
import { examRoute } from "./module/exams/exam.route";
import { FeesRoute } from "./module/fees/fees.route";
import { IssueBookRoute } from "./module/issus_books/issus_book.route";
import { librayBookRoute } from "./module/libray_books/libray_books.route";
import { noticeRoute } from "./module/notices/notices.route";
import { ParentRoute } from "./module/parents/parent.route";
import { ResultRoute } from "./module/results/result.route";
import { RoutineRoute } from "./module/routines/routine.route";
import { StudentParentroute } from "./module/student_parents/student_parent.route";
import { studentRoute } from "./module/students/student.route";
import { Subjectroute } from "./module/subjects/subject.route";
import { TeacherRoute } from "./module/teachers/teacher.route";
import { userRoute } from "./module/users/user.route";
import cors from "cors";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", assignmentsRoute);
app.use("/api", assignmentsSubmetionRoute);
app.use("/api", attendanceRoute);
app.use("/api", classRoute);
app.use("/api", examRoute);
app.use("/api", FeesRoute);
app.use("/api", IssueBookRoute);
app.use("/api", librayBookRoute);
app.use("/api", noticeRoute);
app.use("/api", ParentRoute);
app.use("/api", ResultRoute);
app.use("/api", RoutineRoute);
app.use("/api", StudentParentroute);
app.use("/api", studentRoute);
app.use("/api", Subjectroute);
app.use("/api", TeacherRoute);
app.use("/api", userRoute);


export default app;