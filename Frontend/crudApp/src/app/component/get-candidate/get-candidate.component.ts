import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent implements OnInit {

  
  constructor(private http : HttpClient, private router : Router) { }

  baseurl = "http://localhost:8080/dashboard/upload"

  ngOnInit(): void {
    
  }
  file: any
  flag=true;

selectFile(event:any){
  console.log(event);
  
this.file = event.target.files[0];
}

uploadFile(){
  let formData =new FormData();
  formData.append("file", this.file);
  this.flag=false;
  this.http.post(this.baseurl, formData).subscribe( 
    (data:any)=>{
     this.flag=true;
      alert("Your file is saved!")
      this.router.navigate(["/dashboard"])
    },
    (error)=>{
      this.flag = true;
      console.log(error);
     
      
    })
  
}

}
