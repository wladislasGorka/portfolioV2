import ContactLink from "../components/ContactLink";
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section className="about">
      <div className="about-header">
        <h2>Let’s Connect</h2>
        <p>
          Whether you want to collaborate, ask a question, or just say hi —
          I’m always open to meaningful conversations.
        </p>
      </div>

      <div className="contact-links">
        <ContactLink
          icon={FaEnvelope}
          url="mailto:wladislas.gorka@gmail.com"
          label="Email"
        />
        <ContactLink
          icon={FaGithub}
          url="https://github.com/wladislasGorka"
          label="GitHub"
        />
        <ContactLink
          icon={FaLinkedin}
          url="https://linkedin.com/in/wladislas-gorka"
          label="LinkedIn"
        />
      </div>
    </section>
  );
}