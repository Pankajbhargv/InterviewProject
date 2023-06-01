import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username : "",
    password : ""
  }

constructor(private loginService : LoginService){}

  ngOnInit(): void {
    
  }



  onSubmit(){
    console.log(this.credentials);
    if((this.credentials.username != "" && this.credentials.password !="") && (this.credentials!=null && this.credentials.password!=null )){
      console.log("We have submitted to form");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //when token is generated successfully
          console.log(response.token);
          this.loginService.loginUser(response.token); //it will provide the token and help the user to logged in
          window.location.href= "/getcandidates";
        }
        , error=>{
          //when token is not generated successfully
          console.log(error);
        }
      )

      //here we have to generate the token and it will generated from the server side
    }
    else{
      console.log("Form has not been submitted");
    }
  }

}
