import LogoSrc from "@/assets/logo.jpg";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      .post("/api/auth/login", values, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/TaskManager");
      })
      .catch(() => alert("Authentication failed"));
    setSubmitting(false); // Reset form submission state after submit
  };

  return (
    <PageContainer>
      <Logo src={LogoSrc} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <FormWrapper>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <Error name="email" component="div" className="error" />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <Error name="password" component="div" className="error" />
            <br />

            <Submit type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Submit>
          </FormWrapper>
        )}
      </Formik>
      <Link to="/Register">Login</Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 16%;
  padding: 3rem;
  background-color: whitesmoke;
`;

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Submit = styled.button`
  cursor: pointer;
`;

const Error = styled(ErrorMessage)`
  color: red;
`;

const Logo = styled.img`
  width: 50%;
  border-radius: 100px;
`;
