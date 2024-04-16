import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

const validationSchema = Yup.object<User>({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters long")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();

  const initialValues: User = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: User,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // Submit form data to backend (e.g., using a fetch API call)
    axios
      .post("http://localhost:8080/api/auth/login", values, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/TaskManager");
      })
      .catch(() => alert("Authentication failed"));
    setSubmitting(false); // Reset form submission state after submit
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className="error" />
          <br />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" className="error" />
          <br />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
