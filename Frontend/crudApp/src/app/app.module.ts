import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './component/navbar/navbar.component';

import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


import { AuthGuard } from './services/auth.guard';
import { LoginService } from './services/login.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { CreateCandidateComponent } from './component/create-candidate/create-candidate.component';
import { CandidateService } from './services/candidate.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { GetCandidateComponent } from './component/get-candidate/get-candidate.component';
import { LoaderComponent } from './component/loader/loader.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './component/register/register.component';
import { ShortlistComponent } from './component/shortlist/shortlist.component';
import { FirstpageComponent } from './component/firstpage/firstpage.component';



@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CreateCandidateComponent,
    GetCandidateComponent,
    LoaderComponent,
    MainComponent,
    RegisterComponent,
    ShortlistComponent,
    FirstpageComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [CandidateService,LoginService, AuthGuard, [{provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
