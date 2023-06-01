import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CreateCandidateComponent } from './component/create-candidate/create-candidate.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetCandidateComponent } from './component/get-candidate/get-candidate.component';

import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
 //javascript object
  {path : 'login', component : LoginComponent, pathMatch :'full'},
  {path : '', component : HomeComponent, pathMatch : 'full'},
  {path : 'dashboard', component : DashboardComponent, pathMatch : 'full', canActivate : [AuthGuard]},
  {path : 'dashboard/candidates', component : CreateCandidateComponent, pathMatch : 'full', canActivate : [AuthGuard]},
  {path : 'getcandidates', component : GetCandidateComponent, pathMatch : 'full', canActivate : [AuthGuard]},
  {path : 'dashboard/register', component : RegisterComponent, pathMatch : 'full' ,canActivate : [AuthGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
