import { Component, OnInit} from '@angular/core';
import { EducationModel } from 'src/app/model/education.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  dataEducation:any;
  componente:string="education";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataEducation=data;
    });
    
  }

  onEdit(education:EducationModel){
    this.datosPortfolio.sendData(education,false);
  }

  onDelete(education:EducationModel)
  {
   this.datosPortfolio.borrarItem(this.componente,education).subscribe(() =>
    {
      this.dataEducation = this.dataEducation.filter((t: { id: number; }) => t.id !== education.id)
    });

  } 

  onCreate(){
     
    this.datosPortfolio.sendData({},true);
  }

}