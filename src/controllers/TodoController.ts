import { Request, Response } from "express";
import IController from "./ControllersInterfaces";
import TodoService from "../services/TodoService";

class TodoController implements IController{
  index = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todos = await services.getAll();
    
    return res.send({
      message: '',
      data: todos
    });
  };
  create= async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = await services.store();
    
    return res.send({
      message: 'todo created',
      data: todo
    });
  };
  show = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = await services.getOne();
    
    return res.send({
      data: todo
    });
  };
  update = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = await services.update();
    
    return res.send({
      message: 'todo updated'
    });
  };
  delete  = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = await services.delete();
    
    return res.send({
      message: 'todo deleted'
    });
  };

}

export default new TodoController();