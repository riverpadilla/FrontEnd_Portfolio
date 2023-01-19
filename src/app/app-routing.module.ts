import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';

const routes: Routes = [
  {path:'', component:MainContentComponent },
  {path:'edit', component:EditEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }