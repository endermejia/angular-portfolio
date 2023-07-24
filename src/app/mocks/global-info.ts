import {ProfileModel} from '../models/profile.model';
import {ContactModel} from '../models/contact.model';
import {ContactFormModel} from '../models/contact-form.model';

export const PROFILE: ProfileModel = {
	name: 'Robotkid',
	description: {
		title: 'Products',
		show: true,
		paragraphs: [
			// Musician mercha products
			'Robotkid is a musician and producer from Barcelona, Spain. He has been making music since 1998, and has released 4 albums and 2 EPs. He has also collaborated with other artists, and has produced music for other artists and companies.',
			'Robotkid has also created a series of products related to his music, such as t-shirts, posters, stickers, and other merchandising products. These products are available in his online store, and are shipped worldwide.',


		]
	}
};

export const CONTACT: ContactModel = {
	title: 'How to reach me',
	show: true,
	email: 'robotkid@gmail.com',
	phone: '666 666 666',
	items: [
		{name: 'Twitter', link: 'https://twitter.com/robotkid', icon: 'twitter'},
		{name: 'Instagram', link: 'https://www.instagram.com/robotkid/', icon: 'instagram'},
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
