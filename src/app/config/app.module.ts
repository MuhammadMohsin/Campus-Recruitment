import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, myFirebaseAuthConfig } from './environments/firebase.config';
import {MaterialModule} from '@angular/material';
import {RouterModule} from "@angular/router";
import {routes} from "./router/routing";
import { AppComponent } from '../components/root.component/app.component';
import { SignupComponent } from '../components/signup.component/signup.component';
import { LoginComponent } from '../components/login.component/login.component';
import { PostpostVacancyComponent } from '../components/post.vacancy.component/post.vacancy.component'
import { CompanyJobComponent } from '../components/company.jobs.component/company.jobs.component'
import {UserService} from "../services/user.service";
import {JobsTimelineComponent} from "../components/jobs.timeline.component/jobs.timeline.component";
import {AdminPanelComponent} from "../components/admin.panel.component/admin.panel.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PostpostVacancyComponent,
    CompanyJobComponent,
    JobsTimelineComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
