import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { AwardsComponent } from './home/awards/awards.component';
import { EducationComponent } from './home/education/education.component';
import { FooterComponent } from './footer/footer.component';
import { DesignsComponent } from './designs/designs.component';
import { DevelopmentComponent } from './development/development.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SkillsComponent,
    ExperienceComponent,
    AwardsComponent,
    EducationComponent,
    FooterComponent,
    DesignsComponent,
    DevelopmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
