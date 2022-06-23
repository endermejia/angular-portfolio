import {Component, OnInit} from '@angular/core';
import {GithubReposModel} from "../../../models/github-repos.model";

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {

  public githubRepos: GithubReposModel = {
    title: '🔥 My repositories',
    show: true,
    repos: [
      'https://github-readme-stats.vercel.app/api/pin/?username=endermejia&repo=frontendCV',
      'https://github-readme-stats.vercel.app/api/pin/?username=endermejia&repo=clubescaladacostablanca',
      'https://github-readme-stats.vercel.app/api/pin/?username=endermejia&repo=ctrlThings',
      'https://github-readme-stats.vercel.app/api/pin/?username=endermejia&repo=nobelApp'
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
