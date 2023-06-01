import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technical } from '../model/technical';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private http : HttpClient) { }


  baseUrl: string = "http://localhost:8080/dashboard/technical";

  createTechnical(technical: Technical): Observable<Technical> {
    console.log(technical);
    return this.http.post<Technical>(this.baseUrl ,technical);
}
}
