import {Component, Input} from '@angular/core';
import {ItemModel} from '../../../models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() public item: ItemModel;

  public today: string = new Date().toISOString().split('T')[0];

}
