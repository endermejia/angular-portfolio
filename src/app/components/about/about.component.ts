import {Component} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {PROFILE, SONGS} from '../../mocks/global-info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public profile: ProfileModel = PROFILE;
  public songs: string[] = SONGS;

}
