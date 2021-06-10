import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userAdress, userRole } from "../types";
import { hash } from "../services/hashManager";
import { getAdressInfo } from "../services/getAdressInfo";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password, role, cep, number, complement } =
      req.body;

    if (!name || !nickname || !email || !password || !role) {
      res.statusCode = 422;
      throw new Error(
        "Preencha os campos 'name','nickname', 'password', 'email' e 'role'"
      );
    }

    if (!cep || !number) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'cep' e 'number'");
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422;
      throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN");
    }

    const [user] = await connection("User").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const id: string = generateId();

    const cypherText = await hash(password);

    const newUser: user = {
      id,
      name,
      nickname,
      email,
      password: cypherText,
      role,
    };

    const adressInfos = await getAdressInfo(cep);

    const newAdress: userAdress = {
      street: adressInfos.street,
      number,
      neighborhood: adressInfos.neighborhood,
      complement: complement,
      city: adressInfos.city,
      state: adressInfos.state,
      user_id: id,
    };
    await connection("User").insert(newUser);

    await connection("User_Adress").insert(newAdress);

    const token: string = generateToken({ id, role });

    res.status(201).send({ token });
  } catch (error) {
    res.send({ message: error.message });
  }
}