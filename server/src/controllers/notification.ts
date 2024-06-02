import { Request, Response } from "express";
import Task from "../models/Task";
import request from "request";
import User from "../models/User";

export async function sendReminders(req: Request, res: Response) {
  try {
    console.info(`Sending reminders to users with whatsapp`);
    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const tasks = await Task.find({ dueDateTo: { $gte: startOfToday } });
    await Promise.all(
      tasks.map(async (task) => {
        const userToNotificat = await User.findById(task.createdBy);
        const options = {
          method: "POST",
          url: process.env.WHATSAPPURL,
          headers: {
            Authorization: process.env.SECRET_KEY,
            "Content-Type": "application/json",
          },
          body: {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: userToNotificat.phoneNumber,
            type: "text",
            text: {
              preview_url: false,
              body: `Reminder for task ${task.title} that you need to finish today`,
            },
          },
          json: true,
        };
        request(options);
      })
    );

    return res.status(200).send(`Notification as been send`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}
