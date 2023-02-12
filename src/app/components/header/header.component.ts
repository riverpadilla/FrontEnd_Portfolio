import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  headerPortfolio:any;
  componente:string="header";
  

  constructor(private datosPortfolio: PortfolioService) {

 }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.headerPortfolio=data;
      console.log("Datos obtenidos:" + data)
    });
    
  }

  onEdit(header:any){
    this.datosPortfolio.readData(header);
  }

}