import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  position:string="";
  company:string="";
  period:string="";
  location:string="";
  logoUrl:string="";

  dataExperience:any;
  componente:string="experience";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
   
    this.dataExperience=this.datosPortfolio.writeData();
    this.position=this.dataExperience.position;
    this.company=this.dataExperience.company;
    this.period=this.dataExperience.period;
    this.location=this.dataExperience.location;
    this.logoUrl=this.dataExperience.logo;
  };

  onSubmit(){
    
    this.dataExperience.position=this.position;
    this.dataExperience.company=this.company;
    this.dataExperience.period=this.period;
    this.dataExperience.location=this.location;
    this.dataExperience.logo=this.logoUrl;

    this.datosPortfolio.editarItem(this.componente,this.dataExperience,true)

  }
}
