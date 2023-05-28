import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';
import {GithubActivityModel} from '../models/github-activity.model';
import {GithubReposModel} from '../models/github-repos.model';
import {SkillsModel} from '../models/skills.model';

export const PROFILE: ProfileModel = {
  name: 'gabrielMejia();',
  description: {
    title: 'Gabriel Mejía',
    show: true,
    paragraphs: [
      'Senior FrontEnd Deveoper at <a href="https://www.ricoh.es/" target="_blank">RICOH</a>.',
      'I’m a passionate climber and a good and motivated programmer.',
      'I’m a Frontend Developer with more than 3 years of experience in Angular and Typescript.',
    ]
  }
};

export const CONTACT: ContactModel = {
  title: 'How to reach me',
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

export const CONTACT_FORM: ContactFormModel = {
  title: 'Contact me',
  show: true,
  formspree: 'https://formspree.io/f/moqrrrer',
  name: 'Name',
  namePlaceholder: 'Insert your name',
  email: 'Email',
  emailPlaceholder: 'Insert your email',
  phone: 'Phone',
  phonePlaceholder: 'Insert your phone number',
  message: 'Message',
  messagePlaceholder: 'Write your message',
  sendButton: 'Send'
};

export const GITHUB_ACTIVITY: GithubActivityModel = {
  title: 'Activity',
  show: true,
  gitHubStats: 'https://github-readme-stats.vercel.app/api?username=endermejia&show_icons=true&include_all_commits=true&hide=prs,contribs',
  gitHubLangs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=endermejia&layout=compact'
};

export const GITHUB_REPOS: GithubReposModel = {
  title: 'My repositories',
  show: true,
  baseUrlImage: 'https://github-readme-stats.vercel.app/api/pin/?username=endermejia&repo=',
  baseUrlRepo: 'https://github.com/endermejia/',
  repos: [
    'frontendCV',
    'ctrlThings',
    'clubescaladacostablanca',
    'nobelApp'
  ]
};

export const SKILLS: SkillsModel = {
  title: 'Skills',
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
};
