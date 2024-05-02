import { Request, Response } from "express";
import Task from "../models/Task";
import Comment from "../models/Comment";

export async function assign(req: Request, res: Response) {
  try {
    const { assignee } = req.body;
    const { taskId } = req.params;
    const taskToUpdate = await Task.findByIdAndUpdate(taskId, { assignee });
    if (!taskToUpdate)
      return res.status(204).json({ message: "Task not found" });
    return res.status(200).json({ message: "Task assign successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function getComments(req: Request, res: Response) {
  try {
    const { taskId } = req.params;
    const comment = Comment.findOne({ taskId });
    if (!comment) return res.status(204).json({ message: "Task not found" });
    return res.status(200).json({ comment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function postComment(req: Request, res: Response) {
  try {
    const { taskId } = req.params;
    const { text, createdBy } = req.body;
    await Comment.create({ taskId, text, createdBy, createdAt: new Date() });
    return res.status(200).send("Comment as been saved");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Bed Request" });
  }
}
