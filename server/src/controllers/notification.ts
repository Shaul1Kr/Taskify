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
    console.log(`Retrive the notification of the user`);
    const { id } = req.user;
    const notification = await Notification.find({ userId: id });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}
