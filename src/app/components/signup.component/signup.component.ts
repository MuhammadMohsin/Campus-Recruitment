import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2'

@Component({
  selector: 'login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userObj = {
    username: "",
    age: "",
    collegeName: "",
    lastDegree: "",
    marksObtain: "",
    password: "",
    role: ""
  };
  companyObj = {
    email: "",
    companyName: "",
    password: "",
    role: ""
  };

  usersRef;

  constructor(private af: AngularFire) {
    this.usersRef = af.database.list("/users");
  }

  signupUser() {
    if (this.userObj.username.trim() != "" && this.userObj.age.trim() != "" && this.userObj.collegeName.trim() != "" &&
      this.userObj.lastDegree.trim() != "" && this.userObj.marksObtain.trim() != "" && this.userObj.password.trim() != "") {
      console.log(this.userObj);
      this.userObj.role = "student";
      this.usersRef.push(this.userObj);
      this.userObj = {
        username: "",
        age: "",
        collegeName: "",
        lastDegree: "",
        marksObtain: "",
        password: "",
        role: ""
      };
      alert("Successfully user created ");
    }
    else {
      alert("Please fill all fields");
    }
  }

  signupCompany() {
    if (this.companyObj.email.trim() != "" && this.companyObj.companyName.trim() != "" && this.companyObj.password.trim() != "") {
      this.companyObj.role = "company";
      this.usersRef.push(this.companyObj);

      console.log(this.companyObj);
      this.companyObj = {
        email: "",
        companyName: "",
        password: "",
        role: ""
      };
      alert("Successfully user created ");
    }
    else {
      alert("Please fill all fields");
    }
  }
}
