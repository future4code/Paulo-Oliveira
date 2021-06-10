import { Request, Response } from "express";
import connection from "../connection";
import { hash } from "../services/hashManager";
import transporter from "../services/transporter";

export default async function resetPassword(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const email = req.body.email as string;

    const [user] = await connection("User").where({ email });
    if (!user) {
      throw new Error("Email não cadastrado!");
    }
    const characters = "abcdefABCDEF12345!?/[]{}";
    let newPassword = "";
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * (characters.length - 1));
      newPassword += characters[index];
    }
    const newHash = await hash(newPassword);

    await connection("User").update({ password: newHash }).where({ email });

    const info = await transporter.sendMail({
      from: `Gabriel <gdmussedev@gmail.com>`,
      to: "gdmusse@gmail.com",
      subject: "Mensagem de exemplo",
      text: `  oldPassword: ${user.password},
      newPassword: ${newPassword}`,
    });

    console.log({
      oldPassword: user.password,
      newPassword: newPassword,
      info,
    });

    res.send();
  } catch (err) {
    res.send({ err: err.message });
  }
}