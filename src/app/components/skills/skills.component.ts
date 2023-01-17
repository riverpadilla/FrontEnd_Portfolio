import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  dataSkills:any;
  componente:string="skill";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataSkills=data;
    });
    
  }

  onEdit(skill:any){
    console.log("Editando registro Skills");
    console.log(skill)
  }

  onDelete(skill:any)
  {
   this.datosPortfolio.borrarItem(this.componente, skill).subscribe(() =>
    {
      this.dataSkills = this.dataSkills.filter((t: { id: any; }) => t.id !== skill.id)
    });

  }
}
