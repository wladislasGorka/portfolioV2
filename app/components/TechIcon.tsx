interface TechIconProps {
  icon: JSX.Element;
}

export default function TechIcon({ icon: Icon}: TechIconProps) {
  return (
    <div className="tech-icon">
      <Icon />
    </div>
  );
}