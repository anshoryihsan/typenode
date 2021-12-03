import BaseRoutes from "./BaseRouter";
import validate from "../middlewares/AuthValidator";
import { auth } from "../middlewares/AuthMiddleware";

//controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {

  public routes():void{
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", AuthController.login);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

export default new UserRoutes().router;