import {Component} from '@angular/core';
import {ContactModel} from '../../../models/contact.model';
import {CONTACT} from '../../../mocks/global-info';

@Component({
  selector: 'app-reach-me',
  templateUrl: './reach-me.component.html',
  styleUrls: ['./reach-me.component.scss']
})
export class ReachMeComponent {

  public contact: ContactModel = CONTACT;

}
