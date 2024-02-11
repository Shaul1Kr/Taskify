import mongoose from "mongoose";
import User from "../models/User";
import bcrypt from "bcrypt";
import Task from "../models/Task";

export default async function data() {
  // Insert first users
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash("1234", salt);
  // User.insertMany([
  //   {
  //     _id: new mongoose.Types.ObjectId(),
  //     username: "shauli",
  //     email: "shauli@gmail.com",
  //     password: password,
  //   },
  // ]);
  Task.insertMany([
    {
      title: "asd",
      description: "asd",
      dueDate: "2024-02-11",
      assignee: new mongoose.Types.ObjectId(),
      createdBy: new mongoose.Types.ObjectId(),
    },
  ]);
}
