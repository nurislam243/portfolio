import React from 'react';
import aboutAnimation from "../../assets/aboutAnimation.json"
import Lottie from 'lottie-react';

const About = () => { 
  return (
    <section
      id="about"
      className="pt-[100px] sm:pt-[120px] bg-base-200 flex items-center justify-center px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-14 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* left side */}
          <div className="flex-1 flex justify">
            <Lottie className=' lg:w-[420px]' animationData={aboutAnimation} loop={true} />
          </div>

          {/* right side */}
          <div className="flex-1 prose prose-primary text-base lg:text-[17px] bg-base-100 p-5 rounded-lg shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default About;
