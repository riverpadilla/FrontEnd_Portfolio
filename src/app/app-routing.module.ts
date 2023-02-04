import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditProjectsComponent } from './components/edit-projects/edit-projects.component';

const routes: Routes = [
  {path:'', component:MainContentComponent },
  {path:'edit-experience', component:EditExperienceComponent},
  {path:'edit-education', component:EditEducationComponent},
  {path:'edit-projects', component:EditProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }