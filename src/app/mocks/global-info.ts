import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';
import {ItemModel} from '../models/item.model';

export const PROFILE: ProfileModel = {
  name: 'Robotkid',
  image: 'assets/robotkid-white.png',
  description: {
    title: 'PRODUCTS',
    show: true,
    paragraphs: [
      'Para comprar mis productos, visita mi tienda en Instagram <a href="https://www.instagram.com/car2robotkid/">@car2robotkid</a>',
    ]
  }
};

export const PRODUCTS: ItemModel[] = [
  {
    name: 'CAMISETA DEMON',
    icon: 'assets/camiseta1.jpg',
    price: '20€',
    link: 'https://www.amazon.es/dp/B08KQJQZQD?ref=myi_title_dp'
  },
  {
    name: 'CAMISETA ROBOTKID',
    icon: 'assets/camiseta1.jpg',
    price: '20€',
    link: 'https://www.amazon.es/dp/B08KQJQZQD?ref=myi_title_dp'
  },
  {
    name: 'CAMISETA DARK',
    icon: 'assets/camiseta1.jpg',
    price: '20€',
    link: 'https://www.amazon.es/dp/B08KQJQZQD?ref=myi_title_dp'
  }
];

export const CONTACT: ContactModel = {
  title: 'HOW TO CONTACT ME',
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
  title: 'CONTACT ME',
  show: true,
  formspree: 'https://formspree.io/f/moqrrrer',
  name: 'NAME',
  namePlaceholder: '',
  email: 'EMAIL',
  emailPlaceholder: '',
  phone: 'PHONE',
  phonePlaceholder: '',
  message: 'MESSAGE',
  messagePlaceholder: '',
  sendButton: 'SEND'
};
