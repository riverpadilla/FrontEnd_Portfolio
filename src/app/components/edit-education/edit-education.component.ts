import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {
  
  school:string="";
  title:string="";
  logoUrl:string="";
  date:string="";
  description:string="";


onSubmit(){

}

}
