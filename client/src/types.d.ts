type Tasks = {
  title: string;
  description: string;
  dueDate: date;
  priority: string;
  status: string;
  assignee: string;
  createdBy: string;
  tasks: Array<Tasks>;
};
