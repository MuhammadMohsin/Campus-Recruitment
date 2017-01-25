import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userObj = {};
  signupUser(){
    console.log(this.userObj);
  }
}
