type task = {
  _id: string;
  title: string;
  description: string;
  dueDateFrom: date;
  dueDateTo: date;
  priority: string;
  status: string;
  assignee: string;
  createdBy: string;
};

type user = {
  username: string;
  _id: string;
};
