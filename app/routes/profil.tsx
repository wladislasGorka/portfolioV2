import TechIcon from "../components/TechIcon";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiSymfony,
} from "react-icons/si";

export default function Profil() {
  return (
    <section className="profil">
      <h2>Wladislas GORKA</h2>
      <h3>Web & Mobile Web Developer</h3>

      <p>
        I specialize in crafting clean, efficient, and purposeful web and mobile experiences.
        My goal is to apply my skills to projects that are not only well-structured and useful,
        but also meaningful in their impact.
      </p>

      <p>
        I thrive in environments where learning is continuous, collaboration is valued,
        and code quality is a shared priority. Whether working solo or as part of a team,
        I’m driven by the desire to build things that matter.
      </p>

      <div className="profil-highlights">
        <h4>What I Value</h4>
        <ul>
          <li>Clean, maintainable code</li>
          <li>Teamwork and knowledge sharing</li>
          <li>Projects with real-world impact</li>
          <li>Continuous learning and growth</li>
        </ul>
      </div>

      <div className="profil-highlights">
        <h4>What I Used</h4>
        <div className="profil-techIcon">
            <TechIcon icon={SiHtml5} />
            <TechIcon icon={SiCss3} />
            <TechIcon icon={SiJavascript} />
            <TechIcon icon={SiReact} />
            <TechIcon icon={SiNodedotjs} />
            <TechIcon icon={SiPhp} />
            <TechIcon icon={SiSymfony} />
        </div>
      </div>
    </section>
  );
}