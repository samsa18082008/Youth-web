import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';

const clubs = [
  { name: 'LPBTYC', region: 'Tunis' },
  { name: 'LEYC', region: 'Sfax' },
  { name: 'JHYC', region: 'Sousse' },
  { name: 'MSYC', region: 'Monastir' }
];

const projects = [
  {
    title: 'AGOFM',
    description:
      'Forum général ordinaire annuel réunissant les jeunes leaders.'
  },
  {
    title: 'AGE',
    description:
      'Assemblée générale extraordinaire pour la prise de décisions stratégiques.'
  },
  {
    title: 'AGOMM',
    description:
      'Réunion ordinaire des membres axée sur les initiatives nationales.'
  }
];

const benMembers = [
  { name: 'Amina Ben Salah', role: 'Présidente', photo: 'https://via.placeholder.com/150' },
  { name: 'Karim Trabelsi', role: 'VPA', photo: 'https://via.placeholder.com/150' },
  { name: 'Nadia Gharbi', role: 'VPCOM', photo: 'https://via.placeholder.com/150' }
];

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Autonomiser les jeunes à travers la Tunisie</h1>
          <p>Découvrez nos clubs, nos projets et notre leadership national</p>
          <a className="cta-btn" href="#clubs">Découvrir les clubs</a>
        </div>
      </section>

      <section className="about" id="about">
        <h2>À propos de l'association</h2>
        <p>
          Notre mission est de favoriser la communauté, de développer le
          leadership et d'inspirer l'action chez les jeunes tunisiens.
        </p>
        <div className="values">
          <div className="value-card">Communauté</div>
          <div className="value-card">Leadership</div>
          <div className="value-card">Action</div>
        </div>
      </section>

      <section className="clubs" id="clubs">
        <h2>Clubs locaux</h2>
        <div className="club-grid">
          {clubs.map((club) => (
            <div className="club-card" key={club.name}>
              <h3>{club.name}</h3>
              <p>{club.region}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Projets nationaux</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#">Voir plus</a>
            </div>
          ))}
        </div>
      </section>

      <section className="ben" id="ben">
        <h2>Membres du BEN</h2>
        <div className="ben-grid">
          {benMembers.map((member) => (
            <div className="ben-card" key={member.name}>
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 ASSOCIATION DES CLUBS DE JEUNES</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
