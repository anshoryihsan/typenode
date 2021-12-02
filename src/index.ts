import express, { Application, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

//router
import UserRoutes from "./routes/UserRoutes";

class App {
  public app: Application;
  constructor(){
    this.app = express();
    this.config();
    this.routes();
    
  }
  protected config():void{
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }
  protected routes():void{
    this.app.route("/").get((req:Request, res:Response)=>{
      res.send("hi express TS");
      
    });

    this.app.route("/").post((req:Request, res:Response)=>{
      res.send(req.body);
      
    });

    this.app.use("/users",UserRoutes);
  }
}

const port: number=4040;
const app = new App().app;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// const app = express();
// app.route("/").get((req, res) => {
//   res.send("hi");
// });

// app.listen(4040, () => {
//   console.log(`Server started on port 4040`);
// });
