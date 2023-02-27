import { Component } from '@angular/core';
import { ProjectModel } from 'src/app/model/project.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent {

  title:string="";
  description:string="";

  dataProject:ProjectModel = new ProjectModel;

  componente:string="project";
  checkNew:boolean = false;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {

    this.checkNew =this.datosPortfolio.onNew()
    if(!this.checkNew){
      this.dataProject=this.datosPortfolio.receiveData();
      this.title=this.dataProject.title;
      this.description=this.dataProject.description;
      }
  }

  onSubmit(){

    this.dataProject.title=this.title;
    this.dataProject.description=this.description;

    if (this.checkNew){
      
      this.datosPortfolio.crearItem(this.componente,this.dataProject,false).subscribe();
    }
    else{
      this.datosPortfolio.editarItem(this.componente,this.dataProject,false).subscribe();
    }
  }
}


