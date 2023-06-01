import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CandidateService {

  constructor(private http : HttpClient) { }


  baseUrl: string = "http://localhost:8080/dashboard";

  

  getCandidate() : Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCandidateById(cid: number): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.baseUrl}`+ "/getCandidateById?=" + cid);
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {
    console.log(candidate);
    return this.http.post<Candidate>(this.baseUrl ,candidate);
  }

  updateCandidate(cid: number, candidate: Candidate): Observable<Candidate> {
    return this.http.put<Candidate>(`${this.baseUrl}`+"/" + cid, candidate);
  }

  deleteCandidate(id: number): Observable<Candidate> {
    return this.http.delete<Candidate>(`${this.baseUrl}`+"/deleteCandidate?id=" + id); 
  }


}
