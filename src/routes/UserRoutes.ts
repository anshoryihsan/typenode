import BaseRoutes from "./BaseRouter";

//controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRoutes {

  public routes():void{
    this.router.get("/users", UserController.index);
    this.router.post("/users", UserController.create);
    this.router.get("/users/:id", UserController.show);
    this.router.put("/users/:id", UserController.update);
    this.router.delete("/users/:id", UserController.delete);
  }
}

export default new UserRoutes().router;