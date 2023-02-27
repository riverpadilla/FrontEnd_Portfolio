import { Component, OnInit } from '@angular/core';
import { SkillsModel } from 'src/app/model/skills.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{

  description:string="";
  grade:string="";

  dataSkills:SkillsModel = new SkillsModel;

  componente:string="skill";
  checkNew:boolean = false;

  constructor(private datosPortfolio: PortfolioService) {}

ngOnInit(): void {

  this.checkNew =this.datosPortfolio.onNew()
  if(!this.checkNew){
    this.dataSkills=this.datosPortfolio.receiveData();
    this.description=this.dataSkills.description;
    this.grade=this.dataSkills.grade;
    }
  }

  onSubmit(){

    this.dataSkills.description=this.description;
    this.dataSkills.grade=this.grade;

    if (this.checkNew){
      
      this.datosPortfolio.crearItem(this.componente,this.dataSkills,false).subscribe();
    }
    else{
      this.datosPortfolio.editarItem(this.componente,this.dataSkills,false).subscribe();
    }
  }
}
