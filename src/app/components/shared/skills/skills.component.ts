import {Component, OnInit} from '@angular/core';
import {SkillsModel} from '../../../models/skills.model';
import {CONTACT, SKILLS} from '../../../mocks/global-info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: SkillsModel = SKILLS;

  constructor() {
  }

  ngOnInit(): void {
  }

  protected readonly CONTACT = CONTACT;
}
