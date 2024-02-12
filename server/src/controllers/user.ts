import { Request, Response } from "express";
import Task from "../models/Task";

export async function fatchTask(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    console.log(`Fatching all the tasks that assign to user: ${userId}`);
    const tasks = await Task.find({ assignee: userId });
    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}
