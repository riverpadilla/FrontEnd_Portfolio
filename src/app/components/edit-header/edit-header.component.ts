import { Component, OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})

export class EditHeaderComponent implements OnInit{

  backImage:string="";
  name:string="";
  position:string="";
  // profileImage:string="";
  location:string="";
  email:string="";
  // about:string="";

  headerPortfolio:any;
  componente:string="header";

  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
   
    this.headerPortfolio=this.datosPortfolio.writeData();
    console.log(this.headerPortfolio)
    this.backImage=this.headerPortfolio.backImage;
    this.name=this.headerPortfolio.name;
    this.position=this.headerPortfolio.position;
    // this.profileImage=this.headerPortfolio.profileImage;
    this.location=this.headerPortfolio.location;
    this.email=this.headerPortfolio.email;
    // this.about=this.headerPortfolio.about;
  };

  onSubmit(){
    
    this.headerPortfolio.backImage=this.backImage;
    this.headerPortfolio.name=this.name;
    this.headerPortfolio.position=this.position;
    // this.headerPortfolio.profileImage=this.profileImage;
    this.headerPortfolio.location=this.location;
    this.headerPortfolio.email=this.email;
    // this.headerPortfolio.about=this.about;
   

    this.datosPortfolio.editarItem(this.componente,this.headerPortfolio,false)

  }
}
