import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";

interface DeleteDialogProps {
  taskId: string;
}

export default function DeleteDialog({ taskId }: DeleteDialogProps) {
  const navigate = useNavigate();
  const deleteTask = (taskId: string) => {
    axios
      .delete(`/api/task/deleteTask/${taskId}`)
      .then(() => {
        navigate("/");
      })
      .catch(() => alert("Authentication failed"));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <TrashIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure that you want to delete this task?
          </DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <Button>No</Button>
        </DialogClose>
        <Button onClick={() => deleteTask(taskId)}>yes</Button>
      </DialogContent>
    </Dialog>
  );
}
