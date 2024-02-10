import mongoose from "mongoose";
import User from "../models/User";
import bcrypt from "bcrypt";

export default async function data() {
  // Insert first users
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash("1234", salt);
  User.insertMany([
    {
      _id: new mongoose.Types.ObjectId(),
      firstName: "Shauli",
      lastName: "Kraus",
      username: "shauli",
      password: password,
    },
  ]);
}
