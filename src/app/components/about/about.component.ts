import { Component, OnInit } from '@angular/core'
import { PortfolioService } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  dataAbout:any;
  componente:string="header";
  textoAbout?:string="";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataAbout=data.about;
    });
    
  }

  editAbout(item:any) {
    this.textoAbout = document.getElementById("text-about")?.innerText;
    console.log(this.textoAbout);
    this.datosPortfolio.editarItem(this.componente,item).subscribe();
  }

  saveAbout(textoAbout:string){
    //textoAbout = document.getElementById("text-about").innerText;
  }

}

