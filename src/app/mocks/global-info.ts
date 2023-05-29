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
  items: [
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/endermejia/', icon: 'linkedin'},
    {name: 'GitHub', link: 'https://github.com/endermejia', icon: 'github'},
    {name: 'Instagram', link: 'https://www.instagram.com/gabri.mejia/', icon: 'instagram'},
  ]
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
  items: [
    {name: 'Angular'},
    {name: 'Typescript'},
    {name: 'Javascript'},
    {name: 'HTML5'},
    {name: 'CSS3'},
    {name: 'SASS'},
    {name: 'Bootstrap'},
    {name: 'Material'},
    {name: 'Git'},
  ]
};
