import React, { useEffect, useRef, useState } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiMongoose,
  SiFramer,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 & Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 50 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 50 },
  ],
  learning: [
    { name: 'TypeScript', level: 30 },
    { name: 'Next.js', level: 0 },
    { name: 'Redux', level: 0 },
    { name: 'Mongoose', level: 0 },
    { name: 'Framer Motion', level: 35 },
  ],
};

const skillIcons = {
  'React.js': <FaReact className="text-blue-500 text-xl" />,
  'JavaScript (ES6+)': <SiJavascript className="text-yellow-400 text-xl" />,
  'HTML5': <FaHtml5 className="text-orange-600 text-xl" />,
  'CSS3 & Tailwind CSS': (
    <div className="flex gap-1">
      <FaCss3Alt className="text-blue-600 text-xl" />
      <SiTailwindcss className="text-cyan-500 text-xl" />
    </div>
  ),
  'Node.js': <FaNodeJs className="text-green-600 text-xl" />,
  'Express.js': <SiExpress className="text-gray-700 text-xl" />,
  'MongoDB': <SiMongodb className="text-green-700 text-xl" />,
  'Git & GitHub': (
    <div className="flex gap-1">
      <FaGitAlt className="text-orange-500 text-xl" />
      <FaGithub className="text-black text-xl" />
    </div>
  ),
  'VS Code': <VscVscode className="text-blue-500 text-xl" />,
  'Postman': <SiPostman className="text-orange-400 text-xl" />,
  'TypeScript': <SiTypescript className="text-blue-500 text-xl" />,
  'Next.js': <SiNextdotjs className="text-black text-xl" />,
  'Redux': <SiRedux className="text-purple-500 text-xl" />,
  'Mongoose': <SiMongoose className="text-green-700 text-xl" />,
  'Framer Motion': <SiFramer className="text-pink-500 text-xl" />,
};

const SkillBar = ({ skill }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2 text-base-content font-medium">
          <span>{skillIcons[skill.name]}</span>
          <span>{skill.name}</span>
        </div>
        <span className="text-gray-600">{skill.level}%</span>
      </div>

      {/* Custom animated progress bar */}
      <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-[100px] sm:pt-[120px] bg-base-200 px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-14 text-center">
          Skills
        </h2>

        <div className="grid @min-[600px]:grid-cols-2 @min-[1000px]:grid-cols-3 @min-[1240px]:grid-cols-4 gap-10">
          {/* Frontend Skills */}
          <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Frontend
            </h3>
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Backend Skills */}
          <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Backend
            </h3>
            {skillsData.backend.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Tools */}
          <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Tools
            </h3>
            {skillsData.tools.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Currently Learning */}
          <div className="card bg-base-100 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Currently Learning
            </h3>
            {skillsData.learning.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
