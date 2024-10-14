export interface JobData {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface Tab {
  name: string;
  component: JSX.Element;
}

export interface JobDescriptionProps {
  job: {
    title: string;
    company: string;
    date: string;
    description: string[];
  };
}

export interface ProfileDescriptionProps {
  icon: JSX.Element;
  text: string;
}