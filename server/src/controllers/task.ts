import { Request, Response } from "express";
import Task from "../models/Task";

export async function getTasks(req: Request, res: Response) {
  try {
    console.log(`Getting all the tasks`);
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}
