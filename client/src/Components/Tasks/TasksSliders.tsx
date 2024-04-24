import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TasksSliders({ tasks }: Tasks) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderStyle {...settings}>
      {tasks.map((task) => (
        <Card>
          {task.title}
          {task.status}
          {task.assignee}
          {task.createdBy}
          {task.description}
          {task.dueDate}
          {task.priority}
        </Card>
      ))}
    </SliderStyle>
  );
}

const SliderStyle = styled(Slider)`
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
`;

const Card = styled.div``;
