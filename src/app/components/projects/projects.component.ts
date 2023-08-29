import {Component} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {PROFILE} from '../../mocks/global-info';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public readonly profile: ProfileModel = PROFILE;

}
