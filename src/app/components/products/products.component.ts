import {Component} from '@angular/core';
import {PRODUCTS} from '../../mocks/global-info';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products: ProductModel[] = PRODUCTS;

  constructor(
    public cartService: CartService
  ) {
  }

}
