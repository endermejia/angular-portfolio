import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';
import {GithubActivityModel} from '../models/github-activity.model';
import {GithubReposModel} from '../models/github-repos.model';
import {SkillsModel} from '../models/skills.model';

export const PROFILE: ProfileModel = {
  name: 'Gabriel Mejía',
  description: {
    title: 'FrontEnd Developer',
    show: true,
    paragraphs: [
      'Senior FrontEnd Deveoper at <a href="https://www.ricoh.es/" target="_blank" class="text-gradient">RICOH</a>.',
      'I’m a good and motivated programmer 👨‍💻 and a passionate climber 🧗‍♂️.',
      'I’m a Frontend Developer with more than 3 years of experience in Angular and Typescript.',
    ]
  },
  resumeUrl: 'https://drive.google.com/file/d/1C2SgKZkYbxfSc3vOB_VN2xMcbAl0d49h/view?usp=sharing'
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
  title: 'How can I help you?',
  show: true,
  formspree: 'https://formspree.io/f/moqrrrer',
  name: 'Name',
  namePlaceholder: '',
  email: 'Email',
  emailPlaceholder: '',
  phone: 'Phone',
  phonePlaceholder: '',
  message: 'Message',
  messagePlaceholder: '',
  sendButton: 'Send message'
};

export const SKILLS: SkillsModel = {
  title: 'Skills',
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
