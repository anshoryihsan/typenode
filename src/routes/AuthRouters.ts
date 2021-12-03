import BaseRoutes from "./BaseRouter";

//controllers
import AuthController from "../controllers/AuthController";

class UserRoutes extends BaseRoutes {

  public routes():void{
    this.router.post("/register", AuthController.index);
    this.router.post("/login", AuthController.create);
  }
}

export default new UserRoutes().router;