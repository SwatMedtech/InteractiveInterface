import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HttpModule } from "@angular/http";
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { PrelabsComponent } from './prelabs/prelabs.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { TinyeditorComponent } from './tinyeditor/tinyeditor.component';
import { BsModalModule } from 'ng2-bs3-modal';
import { LabsComponent } from './labs/labs.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { ChemistryLabsComponent } from './chemistry-labs/chemistry-labs.component';
import { ChemistryLab1Component } from './chemistry-lab-1/chemistry-lab-1.component';
import { ChemistryLab2Component } from './chemistry-lab-2/chemistry-lab-2.component';
import { ChemistryLab3Component } from './chemistry-lab-3/chemistry-lab-3.component';
import { PhysicsComponent } from './physics/physics.component';
import { PhysicsLabsComponent } from './physics-labs/physics-labs.component';
import { PhysicsLab1Component } from './physics-lab-1/physics-lab-1.component';
import { PhysicsLab2Component } from './physics-lab-2/physics-lab-2.component';
import { PhysicsLab3Component } from './physics-lab-3/physics-lab-3.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsLabsComponent } from './electronics-labs/electronics-labs.component';
import { ElectronicsLab1Component } from './electronics-lab-1/electronics-lab-1.component';
import { ElectronicsLab2Component } from './electronics-lab-2/electronics-lab-2.component';
import { ElectronicsLab3Component } from './electronics-lab-3/electronics-lab-3.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, /* canActivate:[AuthGuard], */
    children:[
      {path:'LabCourses', component:LabReportsComponent},
      {path:'Prelabs', component:PrelabsComponent},
      {path:'Tutorials', component:TutorialsComponent},
      {path:'Experiments', component:ExperimentComponent}
    ]
  },
  { path:'labs', component:LabsComponent,
    children:[
      {path:'Chemistry', component:ChemistryComponent,
        children:[
          {path:'', pathMatch:'full', redirectTo:'All'},
          {path:'All', component:ChemistryLabsComponent},
          {path:'ChemistryLab_1', component: ChemistryLab1Component},
          {path:'ChemistryLab_2', component: ChemistryLab2Component},
          {path:'ChemistryLab_3', component: ChemistryLab3Component}
        ]
      },
      {path:'Physics', component:PhysicsComponent,
        children:[
          {path:'', pathMatch:'full', redirectTo:'All'},
          {path:'All', component:PhysicsLabsComponent},
          {path:'PhysicsLab_1', component:PhysicsLab1Component},
          {path:'PhysicsLab_2', component:PhysicsLab2Component},
          {path:'PhysicsLab_3', component:PhysicsLab3Component}
        ]
      },
      {path:'Electronics', component:ElectronicsComponent,
        children:[
          {path:'', pathMatch:'full', redirectTo:'All'},
          {path:'All', component:ElectronicsLabsComponent},
          {path:'ElectronicsLab_1', component:ElectronicsLab1Component},
          {path:'ElectronicsLab_2', component:ElectronicsLab2Component},
          {path:'ElectronicsLab_3', component:ElectronicsLab3Component}
        ]
      }
    ]
  },
  {path:'*', component: HomeComponent},
]

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
    PrelabsComponent,
    TutorialsComponent,
    ExperimentComponent,
    TinyeditorComponent,
    LabsComponent,
    ChemistryLabsComponent,
    PhysicsLabsComponent,
    ElectronicsLabsComponent,
    ChemistryLab1Component,
    ChemistryLab2Component,
    ChemistryLab3Component,
    PhysicsLab1Component,
    PhysicsLab2Component,
    PhysicsLab3Component,
    ElectronicsLab1Component,
    ElectronicsLab2Component,
    ElectronicsLab3Component,
    ChemistryComponent,
    PhysicsComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    BsModalModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
