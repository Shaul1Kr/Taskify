import { Request, Response } from "express";
import Task from "../models/Task";

type RequestWithUser = Request & { user: { id: string } };

export async function getTasks(req: Request, res: Response) {
  try {
    console.info(`Getting all the tasks`);
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function createTask(req: RequestWithUser, res: Response) {
  try {
    const { id } = req.user;
    const { title, description, dueDate, priority, status, assignee } =
      req.body;

    console.info(`Creating new task by ${id}`);
    await Task.create({
      title,
      description,
      dueDateFrom: dueDate.from,
      dueDateTo: dueDate.to,
      priority,
      status,
      assignee,
      createdBy: id,
    });
    return res.status(200).send(`The task created successfully`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function getTask(req: Request, res: Response) {
  try {
    const { taskid } = req.params;
    console.info(`Getting task with task id: ${taskid}`);
    const task = await Task.findById(taskid);
    return res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const { taskid } = req.params;
    const { title, description, dueDate, priority, status, assignee } =
      req.body;
    console.info(`Update task by task id: ${taskid}`);
    await Task.findByIdAndUpdate(taskid, {
      title,
      description,
      dueDate,
      priority,
      status,
      assignee,
    });
    return res.status(200).send(`The task updated successfully`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { taskid } = req.params;
    console.info(`Delete task with task id: ${taskid}`);
    await Task.findByIdAndDelete(taskid);
    return res.status(200).send(`The task deleted successfully`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}
