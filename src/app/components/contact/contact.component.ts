import {Component} from '@angular/core';
import {ContactFormModel} from '../../models/contact-form.model';
import {CONTACT_FORM} from '../../mocks/global-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm: ContactFormModel = CONTACT_FORM;

}
