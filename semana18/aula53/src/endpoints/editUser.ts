import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userPersonalInfo, userRole } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname }: userPersonalInfo = req.body

      const token: string = req.headers.authorization!

      const tokenData: authenticationData | null = getTokenData(token)

      if(!tokenData){
         res.statusCode = 401
         throw new Error("Unatuthorized");
      }

      if(tokenData.role !== userRole.ADMIN){
         res.statusCode = 401
         throw new Error("Apenas usuários administradores podem acessar.");
      }

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error("caí aqui")
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.send({message: "Atualizado!"});

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({message: error.message})
      }

      res.send({message: error.message})
   }
}