import {Component} from '@angular/core';
import {SKILLS} from '../../mocks/global-info';
import {SkillsModel} from '../../models/skills.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public readonly skills: SkillsModel = SKILLS;

}
