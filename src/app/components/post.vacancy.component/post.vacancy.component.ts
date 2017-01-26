import { Component } from '@angular/core';
import {AngularFire} from 'angularfire2'
import { UserService }from '../../services/user.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'post-vacancy',
  templateUrl: './post.vacancy.component.html',
  styleUrls: ['./post.vacancy.component.css']
})
export class PostpostVacancyComponent {

  job = {
    title:"",
    details:"",
    salary:"",
    type:"",
  };

  vacanciesRef;
  afRef:any;
  authUserData;
  router;

  constructor(private af:AngularFire, private _userService: UserService, _router : Router) {
    this.authUserData = _userService.getUserData();
    this.afRef = af;
    this.router = _router;
    this.vacanciesRef = af.database.list("/jobs");

    console.log(this.authUserData, "from service")
  }

  postJob(){
    if(this.job.title.trim() != "" && this.job.details.trim() != "" && this.job.salary.trim() != "" && this.job.type.trim() != ""){
      let afJobObj = {
        title:this.job.title,
        details:this.job.details,
        salary:this.job.salary,
        type:this.job.type,
        postedBy: this.authUserData.$key,
        respondBy: ""
      };
      this.vacanciesRef.push(afJobObj).then(
        value=>{
          this.job = {
            title:"",
            details:"",
            salary:"",
            type:"",
          };
          //alert("job posted successfully");
          this.router.navigate(["/myjobs"]);
        },
        err=>{alert("unable to post job")}
      );

    }
    else{
      alert("Please fill all fields");
    }
  }
}
