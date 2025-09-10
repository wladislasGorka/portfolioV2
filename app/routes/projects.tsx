export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <img
          src="/img/portraitPhoto.jpg"
          alt="GreenCart Thumbnail"
          className="project-thumbnail"
        />
        <div className="project-content">
          <h3>GreenCart</h3>
          <p><strong>Stack:</strong> React, Node.js, MongoDB</p>
          <p>
            A sustainable e-commerce platform focused on eco-friendly products.
            Features include user authentication, dynamic product filtering, and a custom admin dashboard.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img
          src="/img/portraitPhoto.jpg"
          alt="VueWeather Thumbnail"
          className="project-thumbnail"
        />
        <div className="project-content">
          <h3>VueWeather</h3>
          <p><strong>Stack:</strong> Vue.js, OpenWeather API</p>
          <p>
            A minimalist weather app with animated transitions and real-time forecasts.
            Designed for mobile-first users with location-based data and dark mode support.
          </p>
        </div>
      </div>

      <div className="project-card">
        <img
          src="/img/portraitPhoto.jpg"
          alt="DevConnect Thumbnail"
          className="project-thumbnail"
        />
        <div className="project-content">
          <h3>DevConnect</h3>
          <p><strong>Stack:</strong> PHP, Symfony, MySQL</p>
          <p>
            A community platform for developers to share resources, ask questions, and collaborate.
            Includes forum threads, user profiles, and a tagging system.
          </p>
        </div>
      </div>
    </section>
  );
}
