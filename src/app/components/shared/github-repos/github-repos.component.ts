import {Component, OnInit} from '@angular/core';
import {GithubReposModel} from '../../../models/github-repos.model';
import {GITHUB_REPOS} from '../../../mocks/global-info';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {

  public githubRepos: GithubReposModel = GITHUB_REPOS

  constructor() {
  }

  ngOnInit(): void {
  }

}
