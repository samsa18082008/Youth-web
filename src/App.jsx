import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-16 flex items-center justify-between px-6 md:px-10 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-700">Youth Web</div>
        <button
          className="md:hidden text-blue-700 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6 text-blue-700">
          <li><a href="#accueil" className="hover:text-blue-900">Accueil</a></li>
          <li><a href="#evenements" className="hover:text-blue-900">Événements</a></li>
          <li><a href="#presentation" className="hover:text-blue-900">Présentation</a></li>
          <li><a href="#contact" className="hover:text-blue-900">Contact</a></li>
        </ul>
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 px-6 py-4 bg-white shadow-md text-blue-700">
          <li><a href="#accueil" className="block" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#evenements" className="block" onClick={() => setMenuOpen(false)}>Événements</a></li>
          <li><a href="#presentation" className="block" onClick={() => setMenuOpen(false)}>Présentation</a></li>
          <li><a href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}

      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 animate-fade-in">
            Welcome to Our Youth Organization
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Building the future together.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
