import { Component, OnInit } from '@angular/core'
import { PortfolioService } from 'src/app/services/portfolio.service'
import { Subscription } from 'rxjs';
import { header } from 'src/app/model/header.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  headerPortfolio:header= new header;
  componente:string="header";
  textoAcercaDe:String="";

  showFormulario:boolean=false;
  suscription?:Subscription;

  constructor(private datosPortfolio: PortfolioService) {
    this.suscription = this.datosPortfolio.onToggle().subscribe(value => this.showFormulario = value)
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.headerPortfolio=data[0];
    });
    
  }

  onEdit(){
    this.textoAcercaDe=this.headerPortfolio.about;
    this.datosPortfolio.toggleFormulario(true);
  }

  onCancel(){
    this.datosPortfolio.toggleFormulario(false);
  }

  onSubmit(){
    if(this.textoAcercaDe.length==0){
      alert("Incluir una breve información acerca de usted. No puede dejar este espacio en blanco");
      return
    }
    this.headerPortfolio.about=this.textoAcercaDe;

    this.datosPortfolio.editarItem(this.componente,this.headerPortfolio,false).subscribe();
    this.onCancel();
  }

}

