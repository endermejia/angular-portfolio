import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {GithubActivityComponent} from './components/shared/github-activity/github-activity.component';
import {GithubReposComponent} from './components/shared/github-repos/github-repos.component';
import {LifestyleComponent} from './components/lifestyle/lifestyle.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ReachMeComponent} from './components/shared/reach-me/reach-me.component';
import {SkillsComponent} from './components/shared/skills/skills.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    GithubActivityComponent,
    GithubReposComponent,
    LifestyleComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ReachMeComponent,
    SkillsComponent
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
