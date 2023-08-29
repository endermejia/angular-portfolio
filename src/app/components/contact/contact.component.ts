import {Component} from '@angular/core';
import {ContactFormModel} from '../../models/contact-form.model';
import {ContactModel} from '../../models/contact.model';
import {CONTACT, CONTACT_FORM} from '../../mocks/global-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public readonly contactForm: ContactFormModel = CONTACT_FORM;
  public readonly contact: ContactModel = CONTACT;

}
