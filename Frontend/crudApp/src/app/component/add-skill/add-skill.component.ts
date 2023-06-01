import { Component } from '@angular/core';
import { AddnewskillService } from 'src/app/services/addnewskill.service';
import { SkillcategoryComponent } from '../skillcategory/skillcategory.component';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {

  

  skillCategoryDropdown:any;

  isOtherSelected = false;
  
 public  skillCategories:string[]=[
  "Process Skill - Required",
  "Technical Skill - Required",
  // "Process Skill - Required",
  // "Technical Skill - Required",
  "Domain - Required",
  "Soft Skills - Required"
  ]

  public skillCategories1:string[]=[];
  
  dataofskill = {
    skillCategory: "",
    skillName: "",
    required_E7: undefined,
    required_E6: undefined,
    required_E5: undefined,
    required_E4: undefined,
    required_E3: undefined,
    required_E2: undefined,
    required_E1A: undefined,
    required_E1: undefined,
    required_E0: undefined,
    required_C: undefined,
  }

  constructor(private _addnewskillserv: AddnewskillService, _skillcat:SkillcategoryComponent) { 
    this.dataofskill.skillCategory = _skillcat.category;
    console.log( _skillcat.category);
    // this.getAllSkillCategories();
    this.skillCategories1 = this._addnewskillserv.getAllSkillCategories();
  }

  changeValue(value:any){
    // if(value=="Other"){
      this.isOtherSelected=(value=="Other")?true:false;
      this.dataofskill.skillCategory = value;
    // }

    console.log(value)
    console.log(this.isOtherSelected)
  }

  resetValues() {
    this.dataofskill = {
      skillCategory: "",
      skillName: "",
      required_E7: undefined,
      required_E6: undefined,
      required_E5: undefined,
      required_E4: undefined,
      required_E3: undefined,
      required_E2: undefined,
      required_E1A: undefined,
      required_E1: undefined,
      required_E0: undefined,
      required_C: undefined,
    }
  }

  addNewSkillCall() {
    this._addnewskillserv.addNewSkill(this.dataofskill);
  }

  getAllSkillCategories(){
    
    this.skillCategories1 = this._addnewskillserv.getAllSkillCategories();
  }

}
