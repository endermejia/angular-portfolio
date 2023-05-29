export interface ProfileDescriptionModel {
  paragraphs: string[];
  show: boolean;
  title: string;
}

export interface ProfileModel {
  description?: ProfileDescriptionModel;
  name: string;
}
