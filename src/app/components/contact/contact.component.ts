import {Component} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {CONTACT_FORM, PROFILE} from '../../mocks/global-info';
import {ContactFormModel} from '../../models/contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public profile: ProfileModel = PROFILE;
  public contactForm: ContactFormModel = CONTACT_FORM;
}
