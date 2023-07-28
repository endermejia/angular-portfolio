import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';
import {ProductModel} from '../models/product.model';

export const PROFILE: ProfileModel = {
  name: 'Robotkid',
  image: 'assets/robotkid-white.png',
  description: {
    title: '', // 'SOBRE MI',
    show: true,
    paragraphs: [
      'Para comprar mis productos, visita mi tienda en Instagram <a href="https://www.instagram.com/car2robotkid/">@car2robotkid</a>',
      'O bien, puedes realizar tu pedido a través de esta web, seleccionando los productos que desees y tramitando el pedido desde el carrito.',
    ]
  }
};

export const PRODUCTS: ProductModel[] = [
  {
    name: 'CAMISETA DEMON',
    icon: 'assets/casino2.webp',
    price: 18.9,
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: false,
    selectedQuantity: 1,
    selectedSize: 'M'
  },
  {
    name: 'CAMISETA ROBOTKID',
    icon: 'assets/casino3.webp',
    price: 15.5,
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: false,
    selectedQuantity: 1,
    selectedSize: 'M'
  },
  {
    name: 'CAMISETA DARK',
    icon: 'assets/casino.webp',
    price: 10.80,
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: true,
    selectedQuantity: 1,
    selectedSize: 'M'
  }
];

export const CONTACT: ContactModel = {
  email: 'robotkid@gmail.com',
  items: [
    {name: 'Instagram', link: 'https://www.instagram.com/car2robotkid/', icon: 'instagram'},
    {name: 'Spotify', link: 'https://open.spotify.com/artist/7zpwO9W2PC1II9m8eCuoG9', icon: 'spotify'},
    {name: 'YouTube', link: 'https://www.youtube.com/@R0BOTKID', icon: 'youtube'},
  ]
};



export const CONTACT_FORM: ContactFormModel = {
  title: 'CONTACTO',
  show: true,
  formspree: 'https://formspree.io/f/moqrrrer',
  name: 'NOMBRE',
  namePlaceholder: '',
  email: 'EMAIL',
  emailPlaceholder: '',
  phone: 'TELÉFONO',
  phonePlaceholder: '',
  message: 'MENSAJE',
  messagePlaceholder: '',
  sendButton: 'ENVIAR'
};
