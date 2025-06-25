import React from 'react';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-sans"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, #dbeafe 0, #dbeafe 10px, #ffffff 10px, #ffffff 20px)',
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
        Youth Web
      </h1>
      <div className="bg-white shadow-lg p-6 md:p-10 max-w-2xl mx-4 md:mx-auto rounded">
        <p className="text-gray-700 text-lg leading-relaxed">
          Youth Web is a digital platform connecting student clubs from high
          schools across Tunisia. It promotes youth-led initiatives, facilitates
          collaboration, and showcases national and local projects. The platform
          empowers local leaders (BEL) and national executives (BEN) to manage
          projects, validate documents, and foster creativity. Designed with
          simplicity and energy, it reflects the passion of Tunisian youth
          engaged in cultural, environmental, scientific, and social action.
        </p>
      </div>
    </div>
  );
};

export default Home;
