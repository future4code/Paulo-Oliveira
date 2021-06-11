import { hash } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { generateToken, getData } from "../services/generateToken";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { createUser, getUserById } from "../services/userDatabase";

export default async function profile(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}