import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("profil", "routes/profil.tsx"),
    route("education", "routes/education.tsx"),
    route("projects", "routes/projects.tsx"),
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;
