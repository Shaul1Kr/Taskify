import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    console.info(
      `Trying to login with email ${email} and password ${password}`
    );
    const user = await User.findOne({ email });
    if (!user) {
      console.info("email or password incorrect1");
      return res.status(401).json({ msg: "email or password incorrect" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.info("email or password incorrect2");
      return res.status(401).json({ msg: "email or password incorrect" });
    }
    jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).send("Login successfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    console.info(
      `Trying to register for a new user with email: ${email} username: ${username} and password: ${password}`
    );
    const salt = await bcrypt.genSalt();
    const saltPassword = await bcrypt.hash(password, salt);
    await User.create({
      email,
      username,
      password: saltPassword,
    });
    return res.status(200).send("Register successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}

export async function changePassword(req: Request, res: Response) {
  try {
    const { email, password, newPassword } = req.body;
    console.info(
      `Trying to change password with email: ${email} password: ${password} with new password ${newPassword}`
    );
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ msg: "email or password incorrect" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ msg: "email or password incorrect" });
    const salt = await bcrypt.genSalt();
    const newSaltPassword = await bcrypt.hash(newPassword, salt);
    await User.findOneAndUpdate({ email }, { password: newSaltPassword });
    return res.status(200).send("Password as been changed");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: " Bed Request" });
  }
}
