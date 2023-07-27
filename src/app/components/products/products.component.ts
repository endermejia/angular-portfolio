import {Component} from '@angular/core';
import {PRODUCTS} from '../../mocks/global-info';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products: ItemModel[] = PRODUCTS;


}
