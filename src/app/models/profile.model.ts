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
  contact?: {
    title: string;
    show: boolean;
    email?: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    linkedinImage?: string;
    githubImage?: string;
    instagramImage?: string;
  }
  skills?: {
    title: string;
    show: boolean;
    list: string[];
  };
  gitHubActivity?: {
    title: string;
    show: boolean;
    gitHubStats: string;
    gitHubLangs: string;
  };
}
