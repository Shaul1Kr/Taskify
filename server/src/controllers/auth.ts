import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export async function login(req: Request, res: Response) {
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

export async function register(req: Request, res: Response) {
  try {
    const { firstName, lastName, username, password } = req.body;
    console.log(
      `Trying to register for a new user with first name: ${firstName} last name: ${lastName} user name: ${username} and password: ${password}`
    );
    const salt = await bcrypt.genSalt();
    const saltPassword = await bcrypt.hash(password, salt);
    await User.create({
      firstName,
      lastName,
      username,
      password: saltPassword,
    });
    return res.status(200).send("Register successfully");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}

export async function changePassword(req: Request, res: Response) {
  try {
    const { username, password, newPassword } = req.body;
    console.log(
      `Trying to change password with user name: ${username} password: ${password} with new password ${newPassword}`
    );
    const user = await User.findOne({ username });
    if (!user)
      return res.status(403).json({ msg: "email or password incorrect" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(403).json({ msg: "email or password incorrect" });
    const salt = await bcrypt.genSalt();
    const newSaltPassword = await bcrypt.hash(newPassword, salt);
    await User.findOneAndUpdate({ username }, { password: newSaltPassword });
    return res.status(200).send("Password as been changed");
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: " Bed Request" });
  }
}
