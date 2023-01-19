import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  dataSkills:any;
  componente:string="skill";
  description:string="";
  grade:string="";

  showFormulario:boolean=false;
  suscription?:Subscription;


  constructor(private datosPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos(this.componente).subscribe(data => 
    { 
      this.dataSkills=data;
    });
    
  }

  onEdit(){
    this.datosPortfolio.toggleFormulario(true);
  }

  onCancel(){
    this.datosPortfolio.toggleFormulario(false);
  }

  onSubmit(item:any){
    const check=true;
    item.description=this.description;
    item.grade=this.grade;

    this.dataSkills=item;
    console.log(this.dataSkills);
    //this.datosPortfolio.editarItem(this.componente,this.dataSkills,check).subscribe();
    //this.onCancel();
  }

  onDelete(skill:any)
  {
   this.datosPortfolio.borrarItem(this.componente, skill).subscribe(() =>
    {
      this.dataSkills = this.dataSkills.filter((t: { id: any; }) => t.id !== skill.id)
    });

  }
}
