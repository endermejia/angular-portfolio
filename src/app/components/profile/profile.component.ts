import {Component, OnInit} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {PROFILE} from '../../mocks/global-info';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: ProfileModel = PROFILE

  constructor() {
  }

  ngOnInit(): void {
  }

}
