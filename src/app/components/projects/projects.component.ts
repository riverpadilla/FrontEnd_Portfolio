import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Subscription } from 'rxjs';
import { ProjectModel } from 'src/app/model/project.model';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  dataProject:any;
  componente:string="project";

  title:string="";
  description:string="";

  showFormulario:boolean=false;
  suscription?:Subscription;


  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataProject=data;
    });
    
  }

  onEdit(project:ProjectModel){
    this.datosPortfolio.sendData(project,false);
  }

  onDelete(project:ProjectModel)
  {
   this.datosPortfolio.borrarItem(this.componente, project).subscribe(() =>
    {
      this.dataProject = this.dataProject.filter((t: { id: any; }) => t.id !== project.id)
    });
  }

  onCreate(){
    this.datosPortfolio.sendData({},true);
  }

}
