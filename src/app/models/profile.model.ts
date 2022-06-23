export interface ProfileModel {
  name: string;
  firstName: string;
  lastName?: string;
  position?: string;
  description?: {
    title: string;
    show: boolean;
    paragraphs: string[];
  };
  skills?: {
    title: string;
    show: boolean;
    list: string[];
  };
}
