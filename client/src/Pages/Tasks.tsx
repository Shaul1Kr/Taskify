import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/task/getTasks",
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    return redirect("/");
  }
}

export default function Tasks() {
  const { tasks } = useLoaderData() as Tasks;

  return (
    <div>
      <h1>Tasks</h1>
      {!tasks ? <p>loading</p> : <ul>{tasks.map((task) => task.title)}</ul>}
    </div>
  );
}
