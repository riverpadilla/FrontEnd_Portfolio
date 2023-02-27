import { Component, OnInit } from '@angular/core';
import { EducationModel } from 'src/app/model/education.model';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  
  school:string="";
  title:string="";
  startYear:string="";
  endYear:string="";
  logoUrl:string="";
  description:string="";

  dataEducation:EducationModel = new EducationModel;

  componente:string="education";
  checkNew:boolean = false;

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
  
    this.checkNew =this.datosPortfolio.onNew()
    if(!this.checkNew){
      this.dataEducation=this.datosPortfolio.receiveData();
      this.school=this.dataEducation.school;
      this.title=this.dataEducation.title;
      this.startYear=this.dataEducation.startYear;
      this.endYear=this.dataEducation.endYear;
      this.logoUrl=this.dataEducation.logoUrl;
      this.description=this.dataEducation.description;
    }
  }


  onSubmit(){

    this.dataEducation.school=this.school;
    this.dataEducation.title=this.title;
    this.dataEducation.startYear=this.startYear;
    this.dataEducation.endYear=this.endYear;
    this.dataEducation.logoUrl=this.logoUrl;
    this.dataEducation.description=this.description;

    if (this.checkNew){
      console.log(this.dataEducation)
      this.datosPortfolio.crearItem(this.componente,this.dataEducation,false).subscribe();
    }
    else{
      this.datosPortfolio.editarItem(this.componente,this.dataEducation,false).subscribe();
    }

  }

}
