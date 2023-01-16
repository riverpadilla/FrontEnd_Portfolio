import { Component, OnInit } from '@angular/core'
import { PortfolioService } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  dataAbout:any;

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos("header").subscribe(data => 
    { 
      this.dataAbout=data.about;
    });
    
  }

  editAbout() {
    this.dataAbout="Esta es una prueba";
    this.datosPortfolio.editarAbout(this.dataAbout).subscribe(data =>
      {
        data.about=this.dataAbout;
      }
      )
  }

  saveAbout(textoAbout:string){
    //textoAbout = document.getElementById("text-about").innerText;
  }

}

