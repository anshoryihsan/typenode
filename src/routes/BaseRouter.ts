import { Router, Request, Response } from "express";
import IRouter from "./RouteInterfaces";

abstract class BaseRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes():void;
}

export default BaseRouter;