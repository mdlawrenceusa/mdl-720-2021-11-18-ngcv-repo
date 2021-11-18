import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CvInfoComponent } from './cv-info/cv-info.component';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';
import { CvEducationComponent } from './cv-education/cv-education.component';
import { CvFooterComponent } from './cv-footer/cv-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvInfoComponent,
    CvExperienceComponent,
    CvEducationComponent,
    CvFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
