import {Component} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {PROFILE} from '../../mocks/global-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public readonly profile: ProfileModel = PROFILE;

}
