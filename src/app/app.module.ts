import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ItemCardComponent} from './components/shared/item-card/item-card.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {ProjectCardComponent} from './components/shared/project-card/project-card.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ResumeComponent} from './components/resume/resume.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ItemCardComponent,
    NavbarComponent,
    ProjectCardComponent,
    ProjectsComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
