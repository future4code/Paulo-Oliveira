import { hash } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/generateToken";
import { compareHash } from "../services/hashManager";
import { createUser, getUserByEmail } from "../services/userDatabase";

export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = await getUserByEmail(email);
    if (password !== userData.password) {
      throw new Error("Invalid password");
    }

    if (userData) {
      const check = await compareHash(password, userData.password);
      if (check) {
        const token = generateToken({ id: userData.id, role:userData.role});
        res.status(200).send({ token });
      } else {
        throw new Error(`'email' and/or 'password' incorrect`);
      }
    } else {
      throw new Error(`'email' and/or 'password' incorrect`);
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}