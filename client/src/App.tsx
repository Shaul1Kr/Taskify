import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks, { loader as TaskManagerLoader } from "./Pages/Tasks";
import Layout from "./Layout/Layout";
import Form from "./Pages/Form";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Form /> },
      { path: "TaskManager", loader: TaskManagerLoader, element: <Tasks /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
