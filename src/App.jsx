import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Placeholder */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-10">
        <div className="text-2xl font-bold text-blue-700">Youth Org</div>
        {/* Add nav items here */}
      </nav>
      {/* Hero Section */}
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
