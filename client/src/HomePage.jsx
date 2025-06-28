import React from 'react'

function HomePage() {
  const stripeStyle = {
    backgroundImage: 'repeating-linear-gradient(45deg, #e0f2fe 0, #e0f2fe 10px, #ffffff 10px, #ffffff 20px)'
  }
  return (
    <div style={stripeStyle} className="min-h-screen flex flex-col text-gray-800">
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Youth Web</h1>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <p className="max-w-3xl text-2xl md:text-3xl font-semibold leading-relaxed text-center">
          Youth Web is an online platform for Tunisian youth clubs. It helps them
          share projects, events, and connect with other clubs. Members can find
          information, showcase their activities, and promote collaboration. It
          promotes community, innovation, and youth engagement.
        </p>
      </main>
      <footer className="py-6 text-center">
        <a href="#" className="text-lg font-bold underline">
          Join the Community
        </a>
      </footer>
    </div>
  )
}

export default HomePage
