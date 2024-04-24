import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

interface User {
  username: string;
  email: string;
  password: string;
  rePassword: string;
}

interface RegisterProps {
  setStep: Dispatch<SetStateAction<string>>;
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

export default function Register({ setStep }: RegisterProps) {
  const initialValues: User = {
    username: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const onSubmit = async (
    values: User,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // Submit form data to backend (e.g., using a fetch API call)
    if (values.password !== values.rePassword)
      return alert("Password and Password Confirmation is not equal");
    axios
      .post("http://localhost:8080/api/auth/register", values, {
        withCredentials: true,
      })
      .then(() => {
        setStep("Login");
      })
      .catch(() => alert("Authentication failed"));
    setSubmitting(false); // Reset form submission state after submit
  };

  return (
    <>
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
      <A onClick={() => setStep("Login")}>Login</A>
    </>
  );
}

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

const A = styled.a`
  color: blue;
  text-decoration-line: underline;
  cursor: pointer;
  &:hover {
    color: purple;
  }
`;
