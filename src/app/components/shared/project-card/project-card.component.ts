import {Component, Input} from '@angular/core';
import {ItemModel} from '../../../models/item.model';
import {PROFILE} from "../../../mocks/global-info";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() public item: ItemModel;

  protected readonly PROFILE = PROFILE;
}
