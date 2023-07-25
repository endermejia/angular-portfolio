import {Component} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {PRODUCTS, PROFILE} from '../../mocks/global-info';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public profile: ProfileModel = PROFILE;
  public products: ItemModel[] = PRODUCTS;

}
