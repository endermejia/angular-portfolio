import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CartComponent} from './components/cart/cart.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductsComponent} from './components/products/products.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProductsComponent,
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
