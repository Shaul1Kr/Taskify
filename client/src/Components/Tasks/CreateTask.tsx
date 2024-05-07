import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
// import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerField from "./DatePickerField";

interface TaskForm {
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
  assignee: string;
}

const validationSchema = Yup.object<TaskForm>({
  title: Yup.string().required("Title is required"),
});

export default function CreateTask() {
  const [open, setOpen] = useState(false);
  const initValues: TaskForm = {
    title: "",
    description: "",
    dueDate: new Date(),
    priority: "",
    status: "",
    assignee: "",
  };

  const onSubmit = async (
    values: TaskForm,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setOpen(false);
    console.log({ values });

    setSubmitting(false); // Reset form submission state after submit
  };

  return (
    <div>
      <Dialog open={open}>
        <CloseButton
          size="2rem"
          cursor="pointer"
          onClick={() => setOpen(false)}
        />
        <h1>Create new task</h1>
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <FormWrapper>
              <label htmlFor="title">Task Title*</label>
              <br />
              <Field id="title" name="title" placeholder="Enter your title" />
              <Error name="title" component="div" className="error" />
              <br />

              <label htmlFor="description">Task Description</label>
              <br />
              <Field
                id="description"
                name="description"
                placeholder="Enter your description"
              />
              <Error name="description" component="div" className="error" />
              <br />
              <label htmlFor="dueDate">Due Date</label>
              <br />
              <DatePickerField name="dueDate" />
              <br />
              <label htmlFor="description">Task Priority</label>
              <br />
              <Field
                id="priority"
                name="priority"
                placeholder="Enter your priority"
              />
              <Error name="priority" component="div" className="error" />
              <br />
              <label htmlFor="Status">Task Status</label>
              <br />
              <Field
                id="status"
                name="status"
                placeholder="Enter your status"
              />
              <Error name="status" component="div" className="error" />
              <br />
              <label htmlFor="assignee">Task Assignee</label>
              <br />
              <Field
                id="assignee"
                name="assignee"
                placeholder="Enter your assignee"
              />
              <Error name="assignee" component="div" className="error" />
              <br />

              <Submit type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Submit>
            </FormWrapper>
          )}
        </Formik>
      </Dialog>
      <button
        style={{ display: open ? "none" : "inline-block" }}
        onClick={() => setOpen(true)}
      >
        Create
      </button>
    </div>
  );
}

const Dialog = styled.dialog`
  position: relative;
`;

const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Error = styled(ErrorMessage)`
  color: red;
`;

const Submit = styled.button`
  cursor: pointer;
`;
