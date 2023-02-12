import { Component, OnInit } from '@angular/core';
import { header } from 'src/app/model/header.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  topBarPortfolio:header= new header;
  componente:string="header"

  constructor(private datosPortfolio: PortfolioService) {

 }

 ngOnInit(): void {
  this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
  { 
    this.topBarPortfolio=data[0];
  });
  
  }

}
