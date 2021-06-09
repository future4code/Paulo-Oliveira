import { hash } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/generateToken";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { createUser } from "../services/userDatabase";

export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password, role } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }
    if (!role || role !== "admin" || role !== "normal") {
      throw new Error(`Role must be "admin" or "normal"`);
    }
    const id = generateId();

    const hashPassword = await createHash(password);

    await createUser(id, email, hashPassword, role);

    const token = generateToken({ id, role });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}