import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';
import {ProductModel} from '../models/product.model';

export const PROFILE: ProfileModel = {
  name: 'Robotkid',
  image: 'assets/robotkid-white.png',
  description: {
    title: 'ABOUT ME',
    show: true,
    paragraphs: [
      'Para comprar mis productos, visita mi tienda en Instagram <a href="https://www.instagram.com/car2robotkid/">@car2robotkid</a>',
      'O bien, puedes realizar tu pedido a través de esta web, rellenando el formulario de contacto que encontrarás más abajo.',
    ]
  }
};

export const PRODUCTS: ProductModel[] = [
  {
    name: 'CAMISETA DEMON',
    icon: 'assets/camiseta1.jpg',
    price: 18.9,
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: false
  },
  {
    name: 'CAMISETA ROBOTKID',
    icon: 'assets/camiseta1.jpg',
    price: 15.5,
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: false
  },
  {
    name: 'CAMISETA DARK',
    icon: 'assets/camiseta1.jpg',
    price: 10.80,
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: true
  }
];

export const CONTACT: ContactModel = {
  title: '', // 'HOW TO CONTACT ME',
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
