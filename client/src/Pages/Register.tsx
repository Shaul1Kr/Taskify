import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LogoSrc from "../assets/logo.jpg";
import * as Yup from "yup";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

interface User {
  username: string;
  email: string;
  password: string;
  rePassword: string;
}

const validationSchema = Yup.object<User>({
  username: Yup.string().required("User name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters long")
    .required("Password is required"),
  rePassword: Yup.string().required("RePassword is required"),
});

export default function Register() {
  const initialValues: User = {
    username: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const navigate = useNavigate();

  const onSubmit = async (
    values: User,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // Submit form data to backend (e.g., using a fetch API call)
    if (values.password !== values.rePassword)
      return alert("Password and Password Confirmation is not equal");
    axios
      .post("/api/auth/register", values, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/Login");
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
            <label htmlFor="username">User Name</label>
            <br />
            <Field
              type="username"
              id="username"
              name="username"
              placeholder="Enter your User Name"
            />
            <Error name="username" component="div" className="error" />
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

            <label htmlFor="rePassword">Confirm Password</label>
            <br />

            <Field
              type="rePassword"
              id="rePassword"
              name="rePassword"
              placeholder="Enter confirm password"
            />
            <Error name="password" component="div" className="error" />
            <br />

            <Submit type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Submit>
          </FormWrapper>
        )}
      </Formik>
      <Link to="/Login">Login</Link>
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

const Logo = styled.img`
  width: 50%;
  border-radius: 100px;
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
