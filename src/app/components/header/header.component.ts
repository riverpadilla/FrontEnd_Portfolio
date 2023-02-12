import { Component, OnInit } from '@angular/core';
import { header } from 'src/app/model/header.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  headerPortfolio:header=new header;
  componente:string="header";
  

  constructor(private datosPortfolio: PortfolioService) {

 }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.headerPortfolio=data;
      console.log(this.headerPortfolio)
    });
    
  }

  onEdit(header:any){
    this.datosPortfolio.readData(header);
  }

}