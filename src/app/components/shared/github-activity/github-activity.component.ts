import {Component, OnInit} from '@angular/core';
import {GithubActivityModel} from '../../../models/github-activity.model';
import {GITHUB_ACTIVITY} from '../../../mocks/global-info';

@Component({
  selector: 'app-github-activity',
  templateUrl: './github-activity.component.html',
  styleUrls: ['./github-activity.component.scss']
})
export class GithubActivityComponent implements OnInit {

  public githubActivity: GithubActivityModel = GITHUB_ACTIVITY;

  constructor() {
  }

  ngOnInit(): void {
  }

}
