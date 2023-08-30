import {ItemModel} from './item.model';

export interface ProfileDescriptionModel {
  paragraphs: string[];
  show: boolean;
  title: string;
}

export interface ProfileModel {
  description?: ProfileDescriptionModel;
  name: string;
  skills?: ItemModel[];
  experience?: ItemModel[];
  education?: ItemModel[];
  projects?: ItemModel[];
}
