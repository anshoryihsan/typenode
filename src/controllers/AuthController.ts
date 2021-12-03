import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let {username, password} = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    const createdUser = await db.user.create({
      username,
      password: hashedPassword
    });
    return res.status(200).send("data berhasil disimpan");
  };
  
  login = async (req: Request, res: Response): Promise<Response> => {
    let {username, password} = req.body;

    const user = await db.user.findOne({
      where: {username}
    });
    
    if (user == null) return res.send({message: 'user not found'});
    // //check password
    let compare = await Authentication.passwordCompare(password, user.password);
    // //generate token
    if(compare){
      let token = await Authentication.generateToken(user.id, username, user.password);
      return res.send({
        token
      });
    }
    
    return res.send({message:'server error'});
  };
}

export default new AuthController();