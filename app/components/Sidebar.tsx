import { NavLink } from "react-router";

export default function Sidebar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/profil">Profil</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}