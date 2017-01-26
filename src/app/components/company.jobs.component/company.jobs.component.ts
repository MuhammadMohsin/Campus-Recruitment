import { Component } from '@angular/core';
import {AngularFire} from "angularfire2";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'my-jobs',
  templateUrl: './company.jobs.component.html',
  styleUrls: ['./company.jobs.component.css']
})
export class CompanyJobComponent {
  afRef;
  router;
  userService;
  postedVacancies;
  authUser;

  constructor(private af: AngularFire, private _router: Router, private _userService: UserService){
    this.afRef = af;
    this.router = _router;
    this.userService = _userService;
    this.authUser = _userService.getUserData();
    this.afRef.database.list("/jobs")
      .subscribe(
        value=>{
          let myvalue = value.filter(job=>{
            console.log(job.postedBy,  this.authUser.$key)
            return job.postedBy == this.authUser.$key;
          });
          console.log(value);

          this.postedVacancies = myvalue;
        }
      )
  }

  createJob(){
    this.router.navigate(["/vacancy"]);
  }

  logout(){
    this.userService.logoutUser();
  }
}
