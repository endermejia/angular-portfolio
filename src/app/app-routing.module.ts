import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LifestyleComponent} from "./components/lifestyle/lifestyle.component";


const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'lifestyle', component: LifestyleComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '', component: ProfileComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
