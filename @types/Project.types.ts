interface IProjectProps {
  image: string;
  catergory: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

export interface IProjectCardProps {
  project: IProjectProps;
}
