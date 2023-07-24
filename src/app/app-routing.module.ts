import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProfileComponent} from './components/profile/profile.component';


const routes: Routes = [
  {
    path: 'home', component: ProfileComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
