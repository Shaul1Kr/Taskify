import { Request, Response } from "express";
import Task from "../models/Task";

export async function getTasks(req: Request, res: Response) {
  try {
    console.log(`Getting all the tasks`);
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    const {
      title,
      description,
      dueDate,
      priority,
      status,
      assignee,
      createdBy,
    } = req.body;
    console.log(`Creating new task by ${createdBy}`);
    await Task.create({
      title,
      description,
      dueDate,
      priority,
      status,
      assignee,
      createdBy,
    });
    return res.status(200).send(`The task created successfully`);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}

export async function getTask(req: Request, res: Response) {
  try {
    const { taskid } = req.params;
    console.log(`Getting task with task id: ${taskid}`);
    const task = await Task.findById(taskid);
    return res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const { taskid } = req.params;
    const { title, description, dueDate, priority, status, assignee } =
      req.body;
    console.log(`Update task by task id: ${taskid}`);
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
    console.log(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { taskid } = req.params;
    console.log(`Delete task with task id: ${taskid}`);
    await Task.findByIdAndDelete(taskid);
    return res.status(200).send(`The task deleted successfully`);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}
