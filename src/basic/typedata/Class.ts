export class User{
  public name:string;
  //// public age:string;//
  constructor(name:string,public age:number){
    this.name=name;
    ////this.age=age;
  }
  setName(value: string):void{
    this.name=value;
  }
  getName():string{
    return this.name;
  }
}
// let user=new User("ihsan",24);
// console.log(user);

class Admin extends User{
  read: boolean =  true;
  write: boolean = true;
  phone: string;
  private  _email: string="";
  static getRoleName: string = "Ngademin";

  constructor(phone:string,name:string,age:number){
    super(name,age);
    this.phone=phone;
  }

  static getNameRole(){
    return "hei ngademin";
  }

  getRole(): {read:boolean, write:boolean}{
    return {
      read: this.read,
      write: this.write
    };
  };

  set email(value:string){
    if(value.length<5){
      this._email="email salah";
    }else{
      this._email = value;
    }
  }
  get email():string{
    return this._email;
  }
}
let admin=new Admin('081818','toni',27);
admin.email ='asa@mail.com';
// console.log(admin.email);
let ngademin = Admin.getRoleName;
let ngademin2 = Admin.getNameRole();
console.log(ngademin +": "+ ngademin2);

