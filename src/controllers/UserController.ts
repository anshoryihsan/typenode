import { Request, Response } from "express";
import IController from "./ControllersInterfaces";

import _dataDumy from "../../public/dumyData.json";
let dataDumy: any[]= [..._dataDumy.data];

class UserController implements IController{
  index(req: Request, res: Response): Response {
    return res.send(dataDumy);
  }
  create(req: Request, res: Response): Response {
    const{id,name}=req.body;
    dataDumy.push({
      id:id,
      name:name
    });
    return res.send(dataDumy);
  }
  show(req: Request, res: Response): Response {
    const {id}=req.params;
    let person = dataDumy.find(item => item.id == id);
    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const {id} = req.params;
    const{name:_name}=req.body;
    let person = dataDumy.find(item => item.id == id);
    if (person == undefined) return res.send("data tidak ada");
    person.name=_name;
    return res.send(person);
  }
  delete(req: Request, res: Response): Response {
    const{id} = req.params;
    let person = dataDumy.filter(item => item.id != id);
    return res.send(person);
  }

}

export default new UserController();