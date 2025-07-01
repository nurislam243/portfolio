import React from 'react';

const About = () => { 
  return (
    <section
      id="about"
      className="min-h-screen bg-base-200 flex items-center justify-center px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Text */}
          <div className="flex-1 prose prose-primary text-base bg-base-100 p-5 rounded-lg shadow-lg">
            <p>
              Hello! I'm <span className="font-semibold text-primary">Md. Nur Islam</span>, a passionate MERN stack developer focused on crafting modern, scalable, and user-friendly web applications.
            </p>
            <br />
            <p>
              With experience in MongoDB, Express.js, React, and Node.js, I build responsive and performant interfaces while ensuring clean and maintainable backend services.
            </p>
            <br />
            <p>
              I love continuous learning and applying new technologies to solve real-world problems and improve user experience.
            </p>
          </div>

          {/* Right - Skills */}
          <div className="flex-1 bg-base-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Skills & Technologies
              
            </h3>
            <ul className="list-disc list-inside space-y-3 text-base text-gray-700">
              <li>React.js </li>
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
