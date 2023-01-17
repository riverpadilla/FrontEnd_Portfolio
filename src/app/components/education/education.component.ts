import { Component, OnInit} from '@angular/core';
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

  onEdit(education:any){
    console.log("Editando registro Educación");
    console.log(education)
  }

  onDelete(education:any)
  {
   this.datosPortfolio.borrarItem(this.componente,education).subscribe(() =>
    {
      this.dataEducation = this.dataEducation.filter((t: { id: any; }) => t.id !== education.id)
    });

  }  
}