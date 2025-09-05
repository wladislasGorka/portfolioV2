interface ContactLinkProps {
  icon: JSX.Element;
  url: string;
  label: string;
}

export default function ContactLink({ icon: Icon, url, label }: ContactLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      <span className="icon"><Icon /></span>
      <span className="label">{label}</span>
    </a>
  );
}