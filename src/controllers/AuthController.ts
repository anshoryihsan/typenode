import { Request, Response } from "express";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let {username, password} = req.body;
    const createdUser = await db.user.create({
      username,
      password
    });
    return res.status(200).send("data berhasil disimpan");
  };
  
  login(req: Request, res: Response): Response {
    return res.send("");
  }
}

export default new AuthController();