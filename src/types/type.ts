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

export interface IconProps {
  className?: string;
}

export interface SkillGroupProps {
  icons: React.FC<IconProps>[];
  progressWidth: string;
  iconCount: number;
}
