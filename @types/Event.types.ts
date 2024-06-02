interface IEventProps {
  img: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  event_name?: string;
}

export interface IEventCardProps {
  event: IEventProps;
}
