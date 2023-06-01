import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCandidateService {

  constructor(private http : HttpClient) { }

  baseurl = "http://localhost:8080/dashboard/getcandidates"

  getUploadService(){
    
  }

  


}
