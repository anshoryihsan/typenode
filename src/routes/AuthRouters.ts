import BaseRoutes from "./BaseRouter";
import validate from "../middlewares/AuthValidator";

//controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {

  public routes():void{
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new UserRoutes().router;