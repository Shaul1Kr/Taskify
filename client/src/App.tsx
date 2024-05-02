import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Tasks, { loader as TaskManagerLoader } from "./Pages/Tasks";
import Layout from "./Layout/Layout";
import Error from "./Components/Error/Error";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="TaskManager" /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "TaskManager", loader: TaskManagerLoader, element: <Tasks /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
