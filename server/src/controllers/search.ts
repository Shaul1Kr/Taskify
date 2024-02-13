import { Request, Response } from "express";
import Task from "../models/Task";

export async function filterAndSearch(req: Request, res: Response) {
  try {
    const { keywords, status, priority, assignee } = req.body;

    // Build the query object based on provided search/filter criteria
    let query: any = {};

    if (keywords) {
      // Case-insensitive search by title or description
      query.$or = [
        { title: { $regex: keywords, $options: "i" } },
        { description: { $regex: keywords, $options: "i" } },
      ];
    }

    if (status) {
      query.status = status;
    }

    if (priority) {
      query.priority = priority;
    }

    if (assignee) {
      query.assignee = assignee;
    }

    // Execute the query and return matching tasks
    const tasks = await Task.find(query);
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}
