import { Router, Request, Response } from "express";
import IRouter from "./RouteInterfaces";

//controllers
import UserController from "../controllers/UserController";

class UserRoutes implements IRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes():void{
    this.router.get("/users", UserController.index);
    this.router.post("/users", UserController.create);
    this.router.get("/users/:id", UserController.show);
    this.router.put("/users/:id", UserController.update);
    this.router.delete("/users/:id", UserController.delete);
  }
}

export default new UserRoutes().router;