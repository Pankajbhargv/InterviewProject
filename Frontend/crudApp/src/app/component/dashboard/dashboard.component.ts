import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private http : HttpClient, private router : Router, private candidateService :CandidateService){}
 

  getcandidates: any[] = [];

  file : any

  baseurl = "http://localhost:8080/dashboard/getCandidate";

  candidate : Candidate = new Candidate();

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/dashboard/getCandidate').subscribe(data => {
      this.getcandidates = data;
      console.log(this.getcandidates);
      
    });
  }


  fillform(cid:number,cname:string){
    console.log(this.getcandidates[0].cid);

    
    this.router.navigate(['/dashboard/candidates'],{state:{candid:cid,candName:cname}});
    

  }  

  delete(candidate : any){
    this.candidateService.deleteCandidate(candidate.cid).subscribe(
      (data:any)=> {
    console.log("Data has been deleted")
    this.http.get<any[]>('http://localhost:8080/dashboard/getCandidate').subscribe(data => {
      this.getcandidates = data;
    });
    
     
        
      },
      error=>{console.log(error);}
      
    );
  }


 
}
