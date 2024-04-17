type Tasks = {
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
  assignee: string;
  createdBy: string;
  tasks: Array<Tasks>;
};
