import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";

const router = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "TaskManager", element: <Tasks /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
