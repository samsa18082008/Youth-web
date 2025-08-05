import React from 'react';

/**
 * Home component renders a simple landing page with a striped background
 * and a centered content box describing the Youth Web association.
 */
export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, #e0f2fe 0, #e0f2fe 25px, #f0f9ff 25px, #f0f9ff 50px)'
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
        Youth Web
      </h1>
      <div className="bg-white w-full max-w-2xl p-6 md:p-10 shadow-lg rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          Youth Web is a digital platform connecting student clubs from high schools across Tunisia.
          It promotes youth-led initiatives, facilitates collaboration, and showcases national and local projects.
          The platform empowers local leaders (BEL) and national executives (BEN) to manage projects,
          validate documents, and foster creativity. Designed with simplicity and energy, it reflects the passion
          of Tunisian youth engaged in cultural, environmental, scientific, and social action.
        </p>
      </div>
    </div>
  );
}
