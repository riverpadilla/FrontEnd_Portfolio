import { Component, OnInit } from '@angular/core'
import { PortfolioService } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  headerPortfolio:any;
  componente:string="header";
  textoAcercaDe:string="";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.headerPortfolio=data;
    });
    
  }

showEdit(item:any){
  console.log(item.id);
}

  onSubmit(){
    if(this.textoAcercaDe.length==0){
      alert("Incluir una breve información acerca de usted. No puede dejar este espacio en blanco");
      return
    }
    this.headerPortfolio.about=this.textoAcercaDe;
    this.datosPortfolio.editarItem(this.componente,this.headerPortfolio,false).subscribe();
  }

}

