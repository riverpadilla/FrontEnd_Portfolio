import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Subscription } from 'rxjs';
import { SkillsModel } from 'src/app/model/skills.model';


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

  onEdit(skill:SkillsModel){
    this.datosPortfolio.sendData(skill,false);
  }

  onCancel(){
    this.datosPortfolio.toggleFormulario(3,false);
  }

  onSubmit(skill:SkillsModel){
    const check=true;
    skill.description=this.description;
    skill.grade=this.grade;

    this.dataSkills=skill;
    this.datosPortfolio.editarItem(this.componente,this.dataSkills,check).subscribe();
    this.onCancel();
  }

  onDelete(skill:SkillsModel)
  {
   this.datosPortfolio.borrarItem(this.componente, skill).subscribe(() =>
    {
      this.dataSkills = this.dataSkills.filter((t: { id: any; }) => t.id !== skill.id)
    });

  }

  onCreate(){
     
    this.datosPortfolio.sendData({},true);
  }

}
