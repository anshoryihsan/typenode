import { Router, Request, Response } from "express";
import IRouter from "./RouteInterfaces";

//controllers
import AuthController from "../controllers/AuthController";

class UserRoutes implements IRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes():void{
    this.router.post("/register", AuthController.index);
    this.router.post("/login", AuthController.create);
  }
}

export default new UserRoutes().router;