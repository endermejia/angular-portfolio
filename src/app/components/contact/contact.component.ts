import {Component, OnInit} from '@angular/core';
import {ContactFormModel} from '../../models/contact-form.model';
import {CONTACT_FORM} from '../../mocks/global-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: ContactFormModel = CONTACT_FORM;

  constructor() {
  }

  ngOnInit(): void {
  }

}
