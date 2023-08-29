import {Component} from '@angular/core';
import {ContactModel} from "../../../models/contact.model";
import {CONTACT} from '../../../mocks/global-info';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  public readonly contact: ContactModel = CONTACT;
	public readonly year = new Date().getFullYear();

}
