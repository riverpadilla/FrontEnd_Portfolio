import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { headerModel } from 'src/app/model/header.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    name:String= "";
    position:String="";
    location:String="";
    email:String="";


  headerPortfolio:headerModel = new headerModel;
  componente:string="header";
  
  showFormulario:boolean=false;
  suscription?:Subscription;


  constructor(private datosPortfolio: PortfolioService) {
    this.suscription = this.datosPortfolio.onToggle(2).subscribe(value => this.showFormulario = value)
 }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.headerPortfolio=data[0];

      this.name=this.headerPortfolio.name;
      this.position=this.headerPortfolio.position;
      this.location=this.headerPortfolio.location;
      this.email=this.headerPortfolio.email;

    });
    
  }

  onEdit(header:any){
    this.datosPortfolio.toggleFormulario(2,true);
  }

  onCancel(){
    this.datosPortfolio.toggleFormulario(2,false);
  }

  onSubmit(){
    this.headerPortfolio.name=this.name;
    this.headerPortfolio.position=this.position;
    this.headerPortfolio.location=this.location;
    this.headerPortfolio.email=this.email;
   
    this.datosPortfolio.editarItem(this.componente,this.headerPortfolio,false).subscribe();
    this.onCancel()
  }


}