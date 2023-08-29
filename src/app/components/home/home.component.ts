import {Component, OnInit} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {CONTACT_FORM, PROFILE} from '../../mocks/global-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public profile: ProfileModel = PROFILE;

  constructor() {
  }

  ngOnInit(): void {
  }

  protected readonly CONTACT_FORM = CONTACT_FORM;
}
