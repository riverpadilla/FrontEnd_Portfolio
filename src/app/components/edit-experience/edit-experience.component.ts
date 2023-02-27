import { Component, OnInit, Input, Output } from '@angular/core';
import { ExperienceModel } from 'src/app/model/experience.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  position:string="";
  company:string="";
  actualJob:boolean=false;
  startDate:string="";
  endDate:string="";
  city:string="";
  country:string="";
  logoUrl:string="";
  description:string="Logo company";

  dataExperience:ExperienceModel = new ExperienceModel;

  componente:string="experience";
  checkNew:boolean = false;

  constructor(private datosPortfolio: PortfolioService) {
  }

  ngOnInit(): void {
  
    this.checkNew =this.datosPortfolio.onNew()
    if(!this.checkNew){
      this.dataExperience=this.datosPortfolio.receiveData();
      this.position=this.dataExperience.position;
      this.company=this.dataExperience.company;
      this.actualJob=this.dataExperience.actualJob;
      this.startDate=this.dataExperience.startDate;
      this.endDate=this.dataExperience.endDate;
      this.city=this.dataExperience.city;
      this.country=this.dataExperience.country;
      this.logoUrl=this.dataExperience.logoUrl;
      this.description=this.dataExperience.description;
    }
  }

  onSubmit(){

    this.dataExperience.position=this.position;
    this.dataExperience.company=this.company;
    this.dataExperience.actualJob=this.actualJob;
    this.dataExperience.startDate=this.startDate;
    this.dataExperience.endDate=this.endDate;
    this.dataExperience.city=this.city;
    this.dataExperience.country=this.country;
    this.dataExperience.logoUrl=this.logoUrl;
    this.dataExperience.description=this.description;

    if (this.checkNew){
      console.log(this.dataExperience)
      this.datosPortfolio.crearItem(this.componente,this.dataExperience,false).subscribe();
    }
    else{
      this.datosPortfolio.editarItem(this.componente,this.dataExperience,false).subscribe();
    }
  }

}
