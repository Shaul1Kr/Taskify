import { Navigate, useRouteError } from "react-router-dom";

interface ExpectedError {
  response?: {
    status: number;
  };
}

export default function Error() {
  const error = useRouteError() as ExpectedError;
  if (error.response?.status === 401) return <Navigate to="Login" />;

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}
