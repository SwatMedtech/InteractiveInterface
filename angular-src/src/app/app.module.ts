import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { TinyeditorComponent } from './tinyeditor/tinyeditor.component';
import { LabsComponent } from './labs/labs.component';
import { PhysicsLabsComponent } from './physics-labs/physics-labs.component';
import { PhysicsLab3Component } from './physics-lab-3/physics-lab-3.component';
import { LabComponent } from './lab/lab.component';
import { RequestService } from './services/request.service';
import { SurveyComponent } from './survey/survey.component';
import { SurveyEditorComponent } from './survey-editor/survey-editor.component';
import { LabCoursesComponent } from './lab-courses/lab-courses.component';
import { SingleLabComponent } from './single-lab/single-lab.component';
import { SharedDataService } from './services/shared-data.service';
import { PreLabComponent } from './pre-lab/pre-lab.component';
import { ExperimentComponent } from './experiment/experiment.component';



const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: 'LabCourses', component: LabReportsComponent},
      {path: 'Lab', component: LabComponent}
    ]
  },
  {path: 'LabCourse', component: LabCoursesComponent},
  {path: 'SingleLab/:id', component: SingleLabComponent},
  {path: 'PreLab/:id', component: PreLabComponent},
  {path: 'Experiment/:id', component: ExperimentComponent},
  {path: '*', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    LabReportsComponent,
    TinyeditorComponent,
    LabsComponent,
    PhysicsLabsComponent,
    PhysicsLab3Component,
    LabComponent,
    SurveyComponent,
    SurveyEditorComponent,
    LabCoursesComponent,
    SingleLabComponent,
    PreLabComponent,
    ExperimentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, RequestService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
