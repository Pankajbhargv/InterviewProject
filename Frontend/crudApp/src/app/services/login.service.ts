import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  url = "http://localhost:8080"

//calling the server to generate the token so for that we need the http client module
//this function will call the server to generate the token
generateToken(credentials : any){
  return this.httpClient.post(`${this.url}/token`, credentials);
}


//for logging in the user and generate the token: token aya and use store krna hai local storage me
  loginUser(token: string){
    localStorage.setItem("token", token);
    return true;

  }
//to check whether user is logged in or not!
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == null || token=='' || token ==undefined){
      return false;
    }
    else{
      return true;
    }

  }
//to logout the user
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token");
  }



}
