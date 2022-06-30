import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../../../models/contact.model';

@Component({
  selector: 'app-reach-me',
  templateUrl: './reach-me.component.html',
  styleUrls: ['./reach-me.component.scss']
})
export class ReachMeComponent implements OnInit {

  public contact: ContactModel = {
    title: '📫 How to reach me',
    show: true,
    email: 'endermejia032@gmail.com',
    phone: '639517895',
    linkedin: 'https://www.linkedin.com/in/endermejia/',
    github: 'https://github.com/endermejia',
    instagram: 'https://www.instagram.com/gabri.mejia/',
    linkedinImage: 'https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white',
    githubImage: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
    instagramImage: 'https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
