import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2'

@Component({
  selector: 'login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userObj = {
    useremail: "",
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
  afRef:any;

  constructor(private af:AngularFire) {
    this.afRef = af;
    this.usersRef = af.database.list("/users");
  }

  signupUser() {
    if (this.userObj.useremail.trim() != "" && this.userObj.age.trim() != "" && this.userObj.collegeName.trim() != "" &&
      this.userObj.lastDegree.trim() != "" && this.userObj.marksObtain.trim() != "" && this.userObj.password.trim() != "") {
      console.log(this.userObj);
      this.userObj.role = "student";

      this.afRef.auth.createUser({email: this.userObj.useremail, password: this.userObj.password}).then(data=> {
        console.log(data.uid);
        this.afRef.database.object("/users/" + data.uid).set(this.userObj);
        alert("Successfully user created ");

        //this.userObj = {};
      });

    }
    else {
      alert("Please fill all fields");
    }
  }

  signupCompany() {
    if (this.companyObj.email.trim() != "" && this.companyObj.companyName.trim() != "" && this.companyObj.password.trim() != "") {
      this.companyObj.role = "company";
      console.log(this.companyObj);
      this.afRef.auth.createUser({email: this.companyObj.email, password: this.companyObj.password}).then(data=> {
        console.log(data.uid);
        this.afRef.database.object("/users/" + data.uid).set(this.companyObj);
        alert("Successfully user created ");
        //this.companyObj = {};
      });

    }
    else {
      alert("Please fill all fields");
    }
  }
}
