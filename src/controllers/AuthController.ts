import { Request, Response } from "express";
import PasswordHash from "../util/PasswordHash";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let {username, password} = req.body;
    const hashedPassword: string = await PasswordHash.hash(password);

    const createdUser = await db.user.create({
      username,
      password: hashedPassword
    });
    return res.status(200).send("data berhasil disimpan");
  };
  
  login(req: Request, res: Response): Response {
    return res.send("");
  }
}

export default new AuthController();