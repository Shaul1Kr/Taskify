import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface DeleteDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  taskId: string;
}

export default function DeleteDialog({
  open,
  setOpen,
  taskId,
}: DeleteDialogProps) {
  const navigate = useNavigate();
  const deleteTask = (taskId: string) => {
    axios
      .delete(`/api/task/deleteTask/${taskId}`)
      .then(() => {
        setOpen(false);
        navigate("/");
      })
      .catch(() => alert("Authentication failed"));
  };

  return (
    <Dialog open={open}>
      <h1>Are you sure that you want to delete this task?</h1>
      <ButtonWrapper>
        <Button onClick={() => setOpen(false)}>No</Button>
        <Button onClick={() => deleteTask(taskId)}>yes</Button>
      </ButtonWrapper>
    </Dialog>
  );
}

const Dialog = styled.dialog`
  z-index: 999;
  transform: translateX(-40%);
`;

const ButtonWrapper = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.2rem 1rem;
`;
