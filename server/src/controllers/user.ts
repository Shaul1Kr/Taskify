import { Request, Response } from "express";
import Task from "../models/Task";

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
