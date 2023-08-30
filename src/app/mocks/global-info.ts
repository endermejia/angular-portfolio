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
  },
  experience: [
    {
      name: 'Senior FrontEnd Developer',
      organization: 'RICOH',
      link: 'https://www.ricoh.es/',
      img: '../../../assets/ricoh.webp',
      place: 'Asturias, Spain - Remote',
      date_to: new Date().toISOString().split('T')[0],
      date_from: '2021-07-01'
    },
    {
      name: 'FrontEnd Developer',
      organization: 'NTT Data',
      link: 'https://es.nttdata.com/',
      img: '../../../assets/nttdata.webp',
      place: 'Alicante, Spain - Remote',
      date_to: '2022-07-01',
      date_from: '2019-12-01'
    }
  ],
  education: [
    {
      name: 'JavaScript Algorithms and Data Structures',
      organization: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/endermejia/javascript-algorithms-and-data-structures',
      img: '../../../assets/freecodecamp.webp',
      date_to: '2020-09-01',
    },
    {
      name: 'Responsive Web Design',
      organization: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/endermejia/responsive-web-design',
      img: '../../../assets/freecodecamp.webp',
      date_to: '2020-09-01',
    },
    {
      name: 'Full Stack Development',
      organization: 'EOI - Industrial Organization School',
      link: 'https://www.eoi.es/es/',
      img: '../../../assets/eoi.webp',
      date_to: '2019-07-01',
    },
    {
      name: 'Engineering of Image and Sound in Telecommunications',
      organization: 'UA - University of Alicante',
      link: 'https://www.ua.es/',
      img: '../../../assets/ua.webp',
      date_from: '2013-09-01',
      date_to: '2019-07-01',
    }
  ]
};

export const CONTACT: ContactModel = {
  title: 'How to reach me?',
  show: true,
  email: 'endermejia032@gmail.com',
  phone: '639517895',
  items: [
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/endermejia/', img: 'linkedin'},
    {name: 'GitHub', link: 'https://github.com/endermejia', img: 'github'},
    {name: 'Instagram', link: 'https://www.instagram.com/gabri.mejia/', img: 'instagram'},
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
