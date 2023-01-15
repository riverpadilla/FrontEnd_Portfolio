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
    this.datosPortfolio.obtenerDatos().subscribe(data => 
    { 
      this.dataAbout=data.about;
    });
    
  }

  itemEdit() {
    let textabout = document.getElementById("text-about")?.innerText;
    console.log(textabout);
  }

  saveEdit(valor:string){
    //document.getElementById("text-about").innerText=valor;
  }

}

