/**
 * Created by Admin on 1/26/2017.
 */
import { Component } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'jobs-timeline',
  templateUrl: './jobs.timeline.component.html',
  styleUrls: ['./jobs.timeline.component.css']
})
export class JobsTimelineComponent {
  afRef;
  router;
  userService;
  postedVacancies;
  authUser;
  alljobs;

  constructor(private af: AngularFire, private _router: Router, private _userService: UserService){
    this.afRef = af;
    this.router = _router;
    this.userService = _userService;
    this.authUser = _userService.getUserData();
    this.alljobs =  this.afRef.database.list("/jobs");

    this.alljobs.subscribe(
        value=>{
          console.log(value);
          this.postedVacancies = value;
        }
      )
  }

  applyJob(jobObj){

    console.log(jobObj.$key);
    this.alljobs.update(jobObj.$key, { respondBy: this.authUser.$key });
  }

  logout(){
    this.userService.logoutUser();
  }
}
