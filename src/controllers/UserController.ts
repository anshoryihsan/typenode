import { Request, Response } from "express";
import IController from "./ControllersInterfaces";

class UserController implements IController{
  index(req: Request, res: Response): Response {
    return res.send("ini end point index");
  }
  create(req: Request, res: Response): Response {
    return res.send(req.body);
  }
  show(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }

}

export default new UserController();