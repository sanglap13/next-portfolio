export interface IProjectProps {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

export interface IProjectCardProps {
  project: IProjectProps;
}
