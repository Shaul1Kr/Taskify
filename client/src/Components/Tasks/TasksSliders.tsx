import Slider from "react-slick";
import styled from "styled-components";

interface TasksSlidersProps {
  tasks: Array<task>;
}

export default function TasksSliders({ tasks }: TasksSlidersProps) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };

  console.log({ tasks });

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {tasks.map((task) => (
          <Card>
            <p>{task.title}</p>
            <p>{task.createdBy}</p>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

const Card = styled.div`
  background-color: grey;
  padding: 5rem;
  width: auto !important;
`;
