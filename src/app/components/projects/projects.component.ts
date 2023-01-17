import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  dataProject:any;
  componente:string="project";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataProject=data;
    });
    
  }

  onEdit(project:any){
    console.log("Editando registro Proyectos");
    console.log(project)
  }

  onDelete(project:any)
  {
   this.datosPortfolio.borrarItem(this.componente, project).subscribe(() =>
    {
      this.dataProject = this.dataProject.filter((t: { id: any; }) => t.id !== project.id)
    });

  }
}
