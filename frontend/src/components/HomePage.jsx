import React from 'react';
import './HomePage.css';

const clubs = [
  { name: 'LPBTYC', region: 'Tunis' },
  { name: 'LEYC', region: 'Sfax' },
  { name: 'JHYC', region: 'Sousse' },
  { name: 'MSYC', region: 'Monastir' }
];

const projects = [
  { title: 'AGOFM', description: 'Annual General Ordinary Forum Meeting bringing youth leaders together.' },
  { title: 'AGE', description: 'General Assembly Extraordinaire for strategic decision-making.' },
  { title: 'AGOMM', description: 'Ordinary Members Meeting focused on national initiatives.' }
];

const benMembers = [
  { name: 'Amina Ben Salah', role: 'President', photo: 'https://via.placeholder.com/150' },
  { name: 'Karim Trabelsi', role: 'VPA', photo: 'https://via.placeholder.com/150' },
  { name: 'Nadia Gharbi', role: 'VPCOM', photo: 'https://via.placeholder.com/150' }
];

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-logo">ASSOCIATION YOUTH CLUBs</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About the Association</a></li>
          <li><a href="#clubs">Local Clubs</a></li>
          <li><a href="#projects">National Projects</a></li>
          <li><a href="#ben">BEN</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Youth Across Tunisia</h1>
          <p>Discover our clubs, projects, and national leadership</p>
          <a className="cta-btn" href="#clubs">Explore Clubs</a>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About the Association</h2>
        <p>Our mission is to foster community, develop leadership, and inspire action among Tunisian youth.</p>
        <div className="values">
          <div className="value-card">Community</div>
          <div className="value-card">Leadership</div>
          <div className="value-card">Action</div>
        </div>
      </section>

      <section className="clubs" id="clubs">
        <h2>Local Clubs</h2>
        <div className="club-grid">
          {clubs.map((club) => (
            <div className="club-card" key={club.name}>
              <h3>{club.name}</h3>
              <p>{club.region}</p>
              <a href="#">View More</a>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>National Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ben" id="ben">
        <h2>BEN Members</h2>
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
        <p>© 2024 ASSOCIATION YOUTH CLUBs</p>
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
