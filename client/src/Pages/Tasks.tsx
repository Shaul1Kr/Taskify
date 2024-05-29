import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TasksSliders from "../Components/Tasks/TasksSliders";
import CreateTask from "../Components/Tasks/CreateTask";

type LoaderData = {
  tasks: task[];
  users: user[];
};

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(): Promise<LoaderData> {
  const response1 = await axios.get("/api/task/getTasks", {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
  const tasks = response1.data;

  const response2 = await axios.get("/api/user", {
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });

  const users = response2.data;
  return { tasks, users };
}

export default function Tasks() {
  const { tasks, users } = useLoaderData<LoaderData>();
  console.log({ tasks }, { users });

  return (
    <>
      <h1>Tasks</h1>
      {!tasks ? <p>loading</p> : <TasksSliders tasks={tasks} />}
      <CreateTask users={users} />
    </>
  );
}
