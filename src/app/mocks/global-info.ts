import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';
import {ItemModel} from '../models/item.model';

export const PROFILE: ProfileModel = {
  name: 'Robotkid',
  image: 'assets/robotkid-white.png',
  description: {
    title: 'Products',
    show: true,
    paragraphs: [
      'Para comprar mis productos, visita mi tienda en Instagram <a href="https://www.instagram.com/car2robotkid/">@car2robotkid</a>',
    ]
  }
};

export const PRODUCTS: ItemModel[] = [
  {
    name: 'Camiseta Dark Lettering',
    icon: 'assets/camiseta1.jpg',
    link: 'https://www.amazon.es/dp/B08KQJQZQD?ref=myi_title_dp'
  },
  {
    name: 'Camiseta Robotkid Dark',
    icon: 'assets/camiseta1.jpg',
    link: 'https://www.amazon.es/dp/B08KQJQZQD?ref=myi_title_dp'
  },
  {
    name: 'Camiseta Dark',
    icon: 'assets/camiseta1.jpg',
    link: 'https://www.amazon.es/dp/B08KQJQZQD?ref=myi_title_dp'
  }
];

export const CONTACT: ContactModel = {
  title: 'Contact me',
  show: true,
  email: 'robotkid@gmail.com',
  phone: '666 666 666',
  items: [
    {name: 'Instagram', link: 'https://www.instagram.com/car2robotkid/', icon: 'instagram'},
    {name: 'Spotify', link: 'https://open.spotify.com/artist/7zpwO9W2PC1II9m8eCuoG9', icon: 'spotify'},
    {name: 'YouTube', link: 'https://www.youtube.com/@R0BOTKID', icon: 'youtube'},
  ]
};

export const CONTACT_FORM: ContactFormModel = {
  title: 'Contact me',
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
  sendButton: 'Send'
};
