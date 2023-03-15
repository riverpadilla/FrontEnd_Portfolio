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

    name:string= "";
    position:string="";
    location:string="";
    email:string="";
    profileImage:string="";
    bgImage:string="";


  headerPortfolio:headerModel = new headerModel;
  componente:string="header";
  
  showFormulario:boolean=false;
  suscription?:Subscription;
  checkEdit=[true,false,false];



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
      this.profileImage=this.headerPortfolio.profileImage;
      this.bgImage=this.headerPortfolio.backImage;

    });
  }

  onEdit(code:number){
    
    this.checkEdit=[false,false,false];
    this.checkEdit[code]=true;

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
    this.headerPortfolio.profileImage=this.profileImage;
    this.headerPortfolio.backImage=this.bgImage;
   
    this.datosPortfolio.editarItem(this.componente,this.headerPortfolio,false).subscribe();
    this.onCancel()
  }


}