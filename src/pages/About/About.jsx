import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#4A148C] mb-6 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left - Text */}
          <div className="flex-1 text-gray-700 text-lg space-y-6">
            <p>
              Hello! I'm <span className="font-semibold text-[#4A148C]">Md. Nur Islam</span>, a passionate MERN stack developer focused on crafting modern, scalable, and user-friendly web applications.
            </p>
            <p>
              With experience in MongoDB, Express.js, React, and Node.js, I build responsive and performant interfaces while ensuring clean and maintainable backend services.
            </p>
            <p>
              I love continuous learning and applying new technologies to solve real-world problems and improve user experience.
            </p>
          </div>

          {/* Right - Skills */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#4A148C] mb-4 text-center">
              Skills & Technologies
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>React.js & Redux</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB & Mongoose</li>
              <li>JavaScript (ES6+), HTML5 & CSS3</li>
              <li>RESTful API Design & Integration</li>
              <li>Git & GitHub Version Control</li>
              <li>Responsive & Mobile-first Design</li>
              <li>Basic knowledge of TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
