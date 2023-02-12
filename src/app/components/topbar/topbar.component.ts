import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  topBarPortfolio:any;
  componente:string="barInfo"

  constructor(private datosPortfolio: PortfolioService) {

 }

 ngOnInit(): void {
  this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
  { 
    this.topBarPortfolio=data;
  });
  
}

}
