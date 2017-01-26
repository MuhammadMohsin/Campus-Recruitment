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

  constructor(private af: AngularFire, private _router: Router, private _userService: UserService){
    this.afRef = af;
    this.router = _router;
    this.userService = _userService;

    this.afRef.database.list("/jobs")
      .subscribe(
        value=>{
          console.log(value);
          this.postedVacancies = value;
        }
      )
  }

  createJob(){
    this.router.navigate(["/vacancy"]);
  }
}
