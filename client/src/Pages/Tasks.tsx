import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TasksSliders from "../Components/Tasks/TasksSliders";
import CreateTask from "../Components/Tasks/CreateTask";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await axios.get("/api/task/getTasks", {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export default function Tasks() {
  const tasks = useLoaderData() as Array<task>;

  return (
    <>
      <h1>Tasks</h1>
      {!tasks ? <p>loading</p> : <TasksSliders tasks={tasks} />}
      <CreateTask />
    </>
  );
}
