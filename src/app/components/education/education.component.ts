import { Component, OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  dataEducation:any;

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos("education").subscribe(data => 
    { 
      this.dataEducation=data.education;
    });
    
  }

  onEdit(education:any){
    console.log("Editando registro Educación");
    console.log(education)
  }

  onDelete(education:any)
  {
   this.datosPortfolio.borrarEducation(education).subscribe(() =>
    {
      this.dataEducation = this.dataEducation.filter((t: { id: any; }) => t.id !== education.id)
    });
    //console.log(this.dataEducation)
  }  
}