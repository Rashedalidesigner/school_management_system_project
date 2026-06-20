import Home from "./pages/Home"
import DashBoard from "./components/DashBoard"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { StudentList } from "./pages/Student"
import { TeacherList } from "./pages/Teacher"
import { UserList } from "./pages/User"
import { SubjectList } from "./pages/Subject"
import { StudentParentRelationList } from "./pages/StudentParent"
import { RoutineList } from "./pages/Routine"
import { ResultList } from "./pages/Result"
import { ParentList } from "./pages/Parent"
import { NoticeList } from "./pages/Notice"
import { LibraryBookList } from "./pages/Library"
import { IssuedBookList } from "./pages/IssueBook"
import { FeeList } from "./pages/Fee"
import { ExamList } from "./pages/Exam"
import { ClassList } from "./pages/Classes"
import { AttendanceList } from "./pages/Attendance"
import { AssignmentList } from "./pages/Assignment"
import { AssignmentSubmissionList } from "./pages/Submission"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/admin",
          element: <DashBoard />,
        },
        {
          path: "/student",
          element: <StudentList />,
        },
        {
          path: "/teacher",
          element: <TeacherList />,
        },
        {
          path: "/assignment",
          element: <AssignmentList />,
        },
        {
          path: "/assignment-submet",
          element: <AssignmentSubmissionList />,
        },
        {
          path: "/attendance",
          element: <AttendanceList />,
        },
        {
          path: "/class",
          element: <ClassList />,
        },
        {
          path: "/exam",
          element: <ExamList />,
        },
        {
          path: "/fee",
          element: <FeeList />,
        },
        {
          path: "/issus_book",
          element: <IssuedBookList />,
        },
        {
          path: "/libray_book",
          element: <LibraryBookList />,
        },
        {
          path: "/notice",
          element: <NoticeList />
        },
        {
          path: "/parent",
          element: <ParentList />
        },
        {
          path: "/result",
          element: <ResultList />
        },
        {
          path: "/routine",
          element: <RoutineList />
        },
        {
          path: "/student_parent",
          element: <StudentParentRelationList />
        },
        {
          path: "/subject",
          element: <SubjectList />
        },
        {
          path: "/user",
          element: <UserList />
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />
}

export default App