import BaseRoutes from "./BaseRouter";

//controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {

  public routes():void{
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new UserRoutes().router;