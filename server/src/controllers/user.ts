import { Request, Response } from "express";
import Task from "../models/Task";
import User from "../models/User";

export async function fatchTask(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    console.info(`Fatching all the tasks that assign to user: ${userId}`);
    const tasks = await Task.find({ assignee: userId });
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    console.info("Fatching all users");
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}
