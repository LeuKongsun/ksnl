interface ProfileDescriptionProps {
  icon: JSX.Element;
  text: string;
}
const ProfileDescription = (props: ProfileDescriptionProps) => {
  return (
    <p className="flex items-center">
      <span className="mr-2">{props.icon}</span> {props.text}
    </p>
  );
};

export default ProfileDescription;
