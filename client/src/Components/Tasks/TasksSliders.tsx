import Slider from "react-slick";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

interface TasksSlidersProps {
  tasks: Array<task>;
}

export default function TasksSliders({ tasks }: TasksSlidersProps) {
  const [open, setOpen] = useState<boolean>(false);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: tasks.length > 1 ? true : false,
    centerPadding: "1rem",
    slidesToShow: tasks.length > 2 ? 3 : tasks.length,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {tasks.map((task) => (
          <Card key={task._id}>
            <DeleteDialog
              open={open}
              setOpen={setOpen}
              taskId={task._id}
            ></DeleteDialog>
            <p>{task.title}</p>
            <p>{task.createdBy}</p>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
            <MdDelete
              size="2rem"
              cursor="pointer"
              onClick={() => setOpen(true)}
            />
          </Card>
        ))}
      </Slider>
    </div>
  );
}

const Card = styled.div`
  background-color: grey;
  padding: 3rem;
  width: auto !important;
`;
