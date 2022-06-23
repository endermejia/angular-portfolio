import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LifestyleComponent} from './components/lifestyle/lifestyle.component';
import {ContactComponent} from './components/contact/contact.component';
import { ReachMeComponent } from './components/shared/reach-me/reach-me.component';
import { GithubActivityComponent } from './components/shared/github-activity/github-activity.component';
import { GithubReposComponent } from './components/shared/github-repos/github-repos.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    LifestyleComponent,
    ContactComponent,
    ReachMeComponent,
    GithubActivityComponent,
    GithubReposComponent
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
