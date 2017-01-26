import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  userObj;

  setUserData(data){
    this.userObj = data;
    console.log("saving in service");
    console.log(data, "saving in service");
    localStorage.setItem("userData", JSON.stringify(data));
  }
  getUserData(){
    let userObjTemp = JSON.parse(localStorage.getItem("userData"));
    return this.userObj || userObjTemp;
  }

}
