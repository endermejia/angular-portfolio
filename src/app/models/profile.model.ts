export interface ProfileModel {
  name: string;
  description?: {
    title: string;
    show: boolean;
    paragraphs: string[];
  };
}
