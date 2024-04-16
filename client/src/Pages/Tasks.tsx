import { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState<Array<Task>>();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/task/getTasks", {
        withCredentials: true,
      })
      .then((res) => setTasks(res.data));
  }, []);
  console.log(tasks);

  return (
    <div>
      <h1>Tasks</h1>
      {!tasks ? <p>loading</p> : <ul>{tasks.map((task) => task.title)}</ul>}
    </div>
  );
}
