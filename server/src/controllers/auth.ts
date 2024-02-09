import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export default async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    console.info(
      `Trying to login with Username ${username} and Password ${password}`
    );
    const user = await User.findOne({ username });
    if (!user)
      return res.status(403).json({ msg: "email or password incorrect" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(403).json({ msg: "email or password incorrect" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send("Login successfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}
