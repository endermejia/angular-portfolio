import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';

export const PROFILE: ProfileModel = {
  name: 'Gabriel Mejía',
  description: {
    title: 'Senior FrontEnd Developer',
    show: true,
    paragraphs: [
      'More than 3 years of experience in Angular and Typescript.',
      'Working at <a href="https://www.ricoh.es/" target="_blank" class="text-gradient">RICOH</a> for the Public Administration.',
      'I’m a good and motivated programmer 👨‍💻 ...',
      '... and a passionate climber 🧗‍♂️.',

    ]
  }
};

export const CONTACT: ContactModel = {
  title: 'How to reach me?',
  show: true,
  email: 'endermejia032@gmail.com',
  phone: '639517895',
  items: [
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/endermejia/', icon: 'linkedin'},
    {name: 'GitHub', link: 'https://github.com/endermejia', icon: 'github'},
    {name: 'Instagram', link: 'https://www.instagram.com/gabri.mejia/', icon: 'instagram'},
    {name: 'Email', link: 'mailto:endermejia032@gmail.com', icon: 'envelope-o'}
  ]
};

export const CONTACT_FORM: ContactFormModel = {
  title: '... or send me a message 😊',
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
