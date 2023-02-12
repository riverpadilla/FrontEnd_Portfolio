import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditProjectsComponent } from './components/edit-projects/edit-projects.component';
import { EditSkillsComponent } from './components/edit-skills/edit-skills.component';
import { EditHeaderComponent } from './components/edit-header/edit-header.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  // {path:'', component:MainContentComponent },
  {path:'edit-header', component:EditHeaderComponent},
  {path:'edit-experience', component:EditExperienceComponent},
  {path:'edit-education', component:EditEducationComponent},
  {path:'edit-skills', component:EditSkillsComponent},
  {path:'edit-projects', component:EditProjectsComponent},
  {path: 'header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }