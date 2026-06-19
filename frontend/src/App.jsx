import Home from "./pages/Home"
import DashBoard from "./components/DashBoard"
import TeacherPage from "./components/TeacherPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { StudentList } from "./pages/Student"
import { TeacherList } from "./pages/Teacher"

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
          element: <DashBoard />,
        },
        {
          path: "/assignment-submet",
          element: <DashBoard />,
        },
        {
          path: "/attendance",
          element: <DashBoard />,
        },
        {
          path: "/class",
          element: <DashBoard />,
        },
        {
          path: "/exam",
          element: <DashBoard />,
        },
        {
          path: "/fee",
          element: <DashBoard />,
        },
        {
          path: "/issus_book",
          element: <DashBoard />,
        },
        {
          path: "/libray_book",
          element: <DashBoard />,
        },
        {
          path: "/notice",
          element: <TeacherPage />
        },
        {
          path: "/parent",
          element: <TeacherPage />
        },
        {
          path: "/result",
          element: <TeacherPage />
        },
        {
          path: "/routine",
          element: <TeacherPage />
        },
        {
          path: "/student_parent",
          element: <TeacherPage />
        },
        {
          path: "/subject",
          element: <TeacherPage />
        },
        {
          path: "/user",
          element: <TeacherPage />
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />
}

export default App