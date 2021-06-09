import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
import { userCredentials } from "../types"
import { compare } from "../services/hashManager"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password }: userCredentials = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("'email' e 'senha' são obrigatórios ")
      }

      const [user] = await connection("to_do_list_users")
         .where({ email });

      const hashCompare = await compare(password, user.password);

      if (!user || !hashCompare) {
         res.statusCode = 401;
         throw new Error("Credenciais inválidas");
      }

      const token: string = generateToken({ id: user.id, role: user.role })

      res.send({ token })

   } catch (error) {

      if (res.statusCode == 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}