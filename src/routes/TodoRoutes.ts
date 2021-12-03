import BaseRoutes from "./BaseRouter";
import { auth } from "../middlewares/AuthMiddleware";
import validate from "../middlewares/TodoValidator";

//controller
import TodoController from "../controllers/TodoController";

class UserRoutes extends BaseRoutes {

  public routes():void{
    this.router.get("/todos", auth, TodoController.index);
    this.router.post("/todos", auth, validate, TodoController.create);
    this.router.get("/todos/:id", auth, TodoController.show);
    this.router.put("/todos/:id", auth, validate, TodoController.update);
    this.router.delete("/todos/:id", auth, TodoController.delete);
  }
}

export default new UserRoutes().router;