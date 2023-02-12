import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioService } from './services/portfolio.service';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EditProjectsComponent } from './components/edit-projects/edit-projects.component';
import { EditSkillsComponent } from './components/edit-skills/edit-skills.component';
import { EditHeaderComponent } from './components/edit-header/edit-header.component';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EditEducationComponent,
    MainContentComponent,
    EditExperienceComponent,
    EditProjectsComponent,
    EditSkillsComponent,
    EditHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }