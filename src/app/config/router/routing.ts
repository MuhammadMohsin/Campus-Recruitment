import { Routes } from '@angular/router';
import {LoginComponent} from "../../components/login.component/login.component";
import {SignupComponent} from "../../components/signup.component/signup.component";
import {PostpostVacancyComponent} from "../../components/post.vacancy.component/post.vacancy.component";
import {CompanyJobComponent} from "../../components/company.jobs.component/company.jobs.component";
import {JobsTimelineComponent} from "../../components/jobs.timeline.component/jobs.timeline.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'vacancy',
    component: PostpostVacancyComponent
  },
  {
    path: 'myjobs',
    component: CompanyJobComponent
  },
  {
    path: 'jobs',
    component: JobsTimelineComponent
  }
];
