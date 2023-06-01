import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { Hr } from 'src/app/model/hr';
import { Technical } from 'src/app/model/technical';
import { CandidateService } from 'src/app/services/candidate.service';
import { HrService } from 'src/app/services/hr.service';
import { TechnicalService } from 'src/app/services/technical.service';


@Component({
  selector: 'create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  @Input()
  cand!: Candidate;



  myfun() {
    console.log(this.cand.cid);
  }

candidate:Candidate=new Candidate();

hr :Hr=new Hr();

 technical : Technical = new Technical();

  
 
  
  
  constructor(private formbuilder : FormBuilder,private hrService : HrService, private candidateService : CandidateService, private technicalService : TechnicalService, private router : Router){}
  
  
  ngOnInit(): void {
    this.candidate.cid = history.state.candid;
    
    this.candidate.cname = history.state.candName;

    console.log("this is cand details",this.candidate)
   
    // console.log(this.id);

    
   
 
  }
  OnSubmit(){
    
   if(this.candidate.itype =="technical"){
    this.technical.final_rating = (Number(this.technical.problem_solving)+ Number(this.technical.adaptability) + Number(this.technical.team_work))/3;
    this.technical.cid = this.candidate.cid;
    this.technical.cname = this.candidate.cname;
    this.technicalService.createTechnical(this.technical).subscribe((data : any)=> console.log(data));
    this.candidateService.createCandidate(this.candidate).subscribe(data=> console.log(data));
    alert("The final Rating is " + this.technical.final_rating);

    
   } 
   else{
  
    
    this.hr.final_rating = (Number(this.hr.problem_solving) + Number(this.hr.adaptability) + Number(this.hr.team_work))/3;
    this.hr.cid = this.candidate.cid;
    this.hr.cname= this.candidate.cname;
    this.hrService.createHr(this.hr).subscribe((data: any)=> console.log(data));
    this.candidateService.createCandidate(this.candidate).subscribe(data=> console.log(data));
    alert("The final Rating is " + this.hr.final_rating);

  
   }

   
 
  


 

  }

  onreset(){
    this.router.navigate(['/dashboard'])
  }




}
