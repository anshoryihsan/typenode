import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require('dotenv').config();

class Authentication{
  public static passwordHash = async (password: string): Promise<string> =>{
    return bcrypt.hash(password, 10);
  };

  public static passwordCompare = async (text: string, encrtyptedText: string): Promise<boolean> => {
    
    let result = await bcrypt.compare(text, encrtyptedText);
    
    return result;
  };

  public static generateToken = async (id: number, username: string, password: string): Promise<string> => {
    const secretKey: string = process.env.SECRET_KEY || "aNsh";
    const token: string = jwt.sign({id, username, password}, secretKey);
    return token;
  };
}

export default Authentication;