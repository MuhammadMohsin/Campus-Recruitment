import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  userObj;

  setUserData(data){
    this.userObj = data;
    console.log("saving in service");
    console.log(data, "saving in service");
  }
  getUserData(){
    return this.userObj;
  }

}
