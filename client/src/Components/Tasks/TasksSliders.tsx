import DeleteDialog from "./DeleteDialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Label } from "../ui/label";

interface TasksSlidersProps {
  tasks: Array<task>;
}

export default function TasksSliders({ tasks }: TasksSlidersProps) {
  return (
    <Carousel className="m-10">
      <CarouselContent>
        <CarouselItem className="basis-1/3"></CarouselItem>
        {tasks.map((task) => (
          <CarouselItem className="basis-1/3">
            <Card key={task._id}>
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid">
                <Label className="font-bold text-xl">
                  Created By: {task.createdBy}
                </Label>
                <Label className="font-bold text-xl">
                  Description: {task.description}
                </Label>
                <Label className="font-bold text-xl">
                  Date from: {task.dueDateFrom}
                </Label>
                <Label className="font-bold text-xl">
                  Date to: {task.dueDateTo}
                </Label>
                <Label className="font-bold text-xl">
                  Priority: {task.priority}
                </Label>
                <Label className="font-bold text-xl">
                  Status: {task.status}
                </Label>
                <Label className="font-bold text-xl">
                  Assignee to: {task.assignee}
                </Label>
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
