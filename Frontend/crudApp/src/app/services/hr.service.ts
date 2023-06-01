import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hr } from '../model/hr';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  constructor(private http : HttpClient) { }


  baseUrl: string = "http://localhost:8080/dashboard/hr";

  createHr(hr: Hr): Observable<Hr> {
    console.log(hr);
    return this.http.post<Hr>(this.baseUrl ,hr);
  
 
}}
