import {Component, OnInit} from '@angular/core';
import {GithubReposModel} from '../../../models/github-repos.model';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {

  public githubRepos: GithubReposModel = {
    title: '🔥 My repositories',
    show: true,
    baseUrlImage: 'https://github-readme-stats.vercel.app/api/pin/?username=endermejia&repo=',
    baseUrlRepo: 'https://github.com/endermejia/',
    repos: [
      'frontendCV',
      'ctrlThings',
      'clubescaladacostablanca',
      'nobelApp'
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
