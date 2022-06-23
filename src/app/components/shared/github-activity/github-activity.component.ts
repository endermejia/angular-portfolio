import {Component, OnInit} from '@angular/core';
import {GithubActivityModel} from '../../../models/github-activity.model';

@Component({
  selector: 'app-github-activity',
  templateUrl: './github-activity.component.html',
  styleUrls: ['./github-activity.component.scss']
})
export class GithubActivityComponent implements OnInit {

  public githubActivity: GithubActivityModel = {
    title: '☕ Activity',
    show: true,
    gitHubStats: 'https://github-readme-stats.vercel.app/api?username=endermejia&show_icons=true&include_all_commits=true&hide=prs,contribs',
    gitHubLangs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=endermejia&layout=compact'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
