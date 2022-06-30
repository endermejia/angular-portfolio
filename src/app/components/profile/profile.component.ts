import {Component, OnInit} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';

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
        '💖 I’m a fanatic climber and a motivated programmer',
        '🧠 I’m currently learning Kotlin and perfecting my frontend skills with Angular framework'
      ]
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
