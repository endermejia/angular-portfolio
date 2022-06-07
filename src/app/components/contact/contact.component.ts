import {Component, OnInit} from '@angular/core';
import {ContactFormModel} from "../../models/contact-form.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: ContactFormModel = {
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
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
