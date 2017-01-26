import { Component } from '@angular/core';
import {AngularFire} from 'angularfire2'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userObj = {email: "", password: ""};
  afRef : any;
  userAuth;
  constructor(private af: AngularFire){
    this.afRef = af;
  }
  loginUser(){
    console.log(this.userObj);
    if(this.userObj.email.trim() !="" && this.userObj.password.trim() !="")
    this.afRef.auth.login({ email: this.userObj.email, password: this.userObj.password })
      .then(auth => {
        console.log(auth);
        this.afRef.database.object("/users/"+auth.uid)
          .subscribe(data=>{
            console.log(data);
            this.userAuth = data;
            if(data.role =="company"){
              //this.router.navigate("/vacancy")
              alert("role in company")
            }
          })

        alert("user authenticated")
      }, function (err) {
        console.log(err);
        alert(err.message);
      });
  }
}
