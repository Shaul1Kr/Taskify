import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Tasks, { loader as TaskManagerLoader } from "./Pages/Tasks";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "TaskManager", loader: TaskManagerLoader, element: <Tasks /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
