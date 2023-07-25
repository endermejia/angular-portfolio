import {Component} from '@angular/core';
import {ProfileModel} from '../../../models/profile.model';
import {PROFILE} from '../../../mocks/global-info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public profile: ProfileModel = PROFILE;

}
