import { User } from "@prisma/client";
import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.json({ token });
  return
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  if (!user) {
    res.status(401);
    res.json({ message: `username or password error` });
    return;
  }
  const isValid = comparePassword(req.body.password, user.password);
  if (!isValid) {
    res.status(401);
    res.json({ message: `username or password error` });
    return;
  }
  
  const token = createJWT(user);
  res.json({ token });
  return
};
