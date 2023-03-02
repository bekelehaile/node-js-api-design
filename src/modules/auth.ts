import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { Request, Response, Next } from "express";

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.name },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req: Request, res: Response, next: Next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.send(`Not authorized`);
    return;
  }
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.send(`Not valid token`);
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    res.send(`Not valid token`);
    return;
  }
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};
