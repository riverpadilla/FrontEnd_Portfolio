import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { header } from 'src/app/model/header.model';
import { PortfolioService } from 'src/app/services/portfolio.service';



@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})

export class EditHeaderComponent implements OnInit{

  

  // backImage:string="";
  name:String= "";
  position:String="";
  // profileImage:string="";
  location:String="";
  email:String="";
  // about:string="";

  headerPortfolio:header=new header;
  componente:string="header";

  showFormulario:boolean=true;
  suscription?:Subscription;

  constructor(private datosPortfolio: PortfolioService) {
    this.suscription = this.datosPortfolio.onToggle(2).subscribe(value => this.showFormulario = value)
  }

  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
      { 
        this.headerPortfolio=data[0];
      // this.headerPortfolio=this.datosPortfolio.writeData();
      this.name=this.headerPortfolio.name;
      this.position=this.headerPortfolio.position;
      // this.profileImage=this.headerPortfolio.profileImage;
      this.location=this.headerPortfolio.location;
      this.email=this.headerPortfolio.email;
      // this.about=this.headerPortfolio.about;
      });
  
 
  }

  onCancel(){
    this.datosPortfolio.toggleFormulario(2,false);
  }

  onSubmit(){
    // this.headerPortfolio.backImage=this.backImage;
    this.headerPortfolio.name=this.name;
    this.headerPortfolio.position=this.position;
    // this.headerPortfolio.profileImage=this.profileImage;
    this.headerPortfolio.location=this.location;
    this.headerPortfolio.email=this.email;
    // this.headerPortfolio.about=this.about;
   
    this.datosPortfolio.editarItem(this.componente,this.headerPortfolio,false).subscribe();
    this.onCancel()
  }
}
