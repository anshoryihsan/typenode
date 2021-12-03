import { Request, Response } from "express";
import IController from "./ControllersInterfaces";
const db = require("../db/models");

class TodoController implements IController{
  index = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.app.locals.credential;
    const todos = await db.todo.findAll({
      where:{ user_id: id},
      attributes: ['id', 'description']
    });
    return res.send({
      message: '',
      data: todos
    });
  };
  create= async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.app.locals.credential;
    const {description} = req.body;
    const todo = await db.todo.create({
      user_id: id,
      description
    });
    return res.send({
      message: 'todo created',
      data: todo
    });
  };
  show = async (req: Request, res: Response): Promise<Response> => {
    const {id:user_id} = req.app.locals.credential;
    const {id}=req.params;
    const todo = await db.todo.findOne({
      where:{id,user_id}
    });
    return res.send({
      data: todo
    });
  };
  update = async (req: Request, res: Response): Promise<Response> => {
    const {id:user_id} = req.app.locals.credential;
    const {id}=req.params;
    const {description}=req.body;
    const todo = await db.todo.update({
      description
    },{
      where: {id, user_id}
    });
    return res.send({
      message: 'todo updated'
    });
  };
  delete  = async (req: Request, res: Response): Promise<Response> => {
    const {id:user_id} = req.app.locals.credential;
    const {id}=req.params;
    const todo = await db.todo.destroy({
      where: {id, user_id}
    });
    return res.send({
      message: 'todo deleted'
    });
  };

}

export default new TodoController();