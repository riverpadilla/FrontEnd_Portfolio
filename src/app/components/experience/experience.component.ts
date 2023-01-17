import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  dataExperience:any;
  componente:string="experience";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataExperience=data;
    });
    
  }

  onEdit(experience:any){
    console.log("Editando registro Experiencia");
    console.log(experience)
  }

  onDelete(experience:any)
  {
   this.datosPortfolio.borrarItem(this.componente, experience).subscribe(() =>
    {
      this.dataExperience = this.dataExperience.filter((t: { id: any; }) => t.id !== experience.id)
    });

  }
}
