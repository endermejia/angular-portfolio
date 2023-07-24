import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ReachMeComponent} from './components/shared/reach-me/reach-me.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ReachMeComponent,
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
