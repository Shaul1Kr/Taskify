import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface IGetUserAuthInfoRequest extends Request {
  user: string;
}

export default function verifyToken(
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token verification failed" });
    }
    req.user = decoded;
    next();
  });
}
