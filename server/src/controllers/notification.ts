import { Request, Response } from "express";
import Notification from "../models/Notification";

interface IUser {
  id: string; // Assuming id is a string
  // Other properties if applicable
}

export interface IGetUserAuthInfoRequest extends Request {
  user: IUser;
}

export async function getNotification(
  req: IGetUserAuthInfoRequest,
  res: Response
) {
  try {
    //req.user.id
    console.info(`Retrive the notification of the user`);
    const { id } = req.user;
    const notification = await Notification.find({ userId: id });
    if (!notification)
      return res.status(204).json({ message: "No notifications" });
    return res.status(200).json({ notification });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function markAllNotification(
  req: IGetUserAuthInfoRequest,
  res: Response
) {
  try {
    //req.user.id
    console.log(`Marked read on the notification of the user`);
    const { id } = req.user;
    await Notification.findByIdAndUpdate({ userId: id }, { isRead: true });
    return res.status(200).json({ message: "Marked read on all notification" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}
