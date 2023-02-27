import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/model/experience.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  template:`<app-edit-experience [dataExperience]="experience"></app-edit-experience>`,
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  dataExperience:any;
  componente:string="experience";

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataExperience=data;
    });
  }

  onEdit(experience:ExperienceModel){
    this.datosPortfolio.sendData(experience,false);
  }

  onDelete(experience:ExperienceModel)
  {
   this.datosPortfolio.borrarItem(this.componente, experience).subscribe(() =>
    {
      this.dataExperience = this.dataExperience.filter((t: { id: any; }) => t.id !== experience.id)
    });
  }

  onCreate(){
    this.datosPortfolio.sendData({},true);
  }


}
