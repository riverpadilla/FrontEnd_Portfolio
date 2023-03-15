import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerModel } from 'src/app/model/header.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  topBarPortfolio:headerModel= new headerModel;
  componente:string="header"

  constructor(private datosPortfolio: PortfolioService,
    private router: Router) {

 }

 ngOnInit(): void {
  this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
  { 
    this.topBarPortfolio=data[0];
  });
  
  }

  onLogin(){
    const loginCheck = document.querySelector(".social button");
    
    if(loginCheck!.innerHTML=="Login"){
      this.router.navigate(['/login']);
      loginCheck?.classList.add("disabled");
    }else{
      this.datosPortfolio.deleteToken();
      loginCheck!.innerHTML="Login";
    }
  }

}
