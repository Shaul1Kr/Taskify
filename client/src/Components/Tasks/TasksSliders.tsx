import DeleteDialog from "./DeleteDialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface TasksSlidersProps {
  tasks: Array<task>;
}

export default function TasksSliders({ tasks }: TasksSlidersProps) {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3"></CarouselItem>
        {tasks.map((task) => (
          <CarouselItem className="basis-1/3">
            <Card key={task._id}>
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{task.createdBy}</p>
                <p>{task.description}</p>
                <p>{task.dueDateFrom}</p>
                <p>{task.dueDateTo}</p>
                <p>{task.priority}</p>
                <p>{task.status}</p>
              </CardContent>
              <CardFooter>
                <DeleteDialog taskId={task._id} />
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
        <CarouselItem className="basis-1/3"></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
