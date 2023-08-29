import {Component} from '@angular/core';
import {PROFILE} from "../../mocks/global-info";
import {ProfileModel} from "../../models/profile.model";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  public readonly profile: ProfileModel = PROFILE;

}
