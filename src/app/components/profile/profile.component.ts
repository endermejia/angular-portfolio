import {Component, OnInit} from '@angular/core';
import {ProfileModel} from "../../models/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: ProfileModel = {
    name: 'gabrielMejia()',
    firstName: 'Gabriel',
    lastName: 'Mejia',
    position: 'Frontend Developer',
    description: {
      title: 'Frontend Developer 🐱‍👤',
      show: true,
      paragraphs: [
        '👋 Hi, I’m Gabriel Mejía Melgarejo',
        '💖 I’m a fanatic climber and a try of programmer',
        '🧠 I’m currently learning Kotlin and perfecting my frontend skills with Angular framework'
      ]
    },
    contact: {
      title: '📫 How to reach me',
      show: true,
      email: 'endermejia032@gmail.com',
      phone: '+57 300 888 8888',
      linkedin: 'https://www.linkedin.com/in/endermejia/',
      github: 'https://github.com/endermejia',
      instagram: 'https://www.instagram.com/gabri.mejia/',
      linkedinImage: 'https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white',
      githubImage: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
      instagramImage: 'https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white'
    },
    skills: {
      title: '✨ Skills',
      show: true,
      list: [
        'https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white',
        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
        'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
        'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
        'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'
      ]
    },
    gitHubActivity: {
      title: '☕ Activity',
      show: true,
      gitHubStats: 'https://github-readme-stats.vercel.app/api?username=endermejia&show_icons=true&include_all_commits=true&hide=contribs,prs',
      gitHubLangs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=endermejia&layout=compact'
    }

  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
