import { ProfileDescriptionProps } from "@/types/type";

const ProfileDescription = (props: ProfileDescriptionProps) => {
  return (
    <p className="flex items-center">
      <span className="mr-2">{props.icon}</span> <span className="text-sm">{props.text}</span>
    </p>
  );
};

export default ProfileDescription;
