import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  datePipe: DatePipe = new DatePipe('en-US'); 
  public loggedIn = false 
  constructor(private loginService: LoginService) { } 
  ngOnInit(): void { this.loggedIn = this.loginService.isLoggedIn() } 
  
  logoutUser() { this.loginService.logout()
     location.reload() }
      getDate() { 
        var date = new Date(); 
        var transformDate = this.datePipe.transform(date, 'dd-MM-yyyy hh-mm a'); 
      return transformDate; }




}
