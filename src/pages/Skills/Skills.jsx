import React from 'react';

const skillsData = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 & Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 70 },
  ],
};

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-800 font-medium">{skill.name}</span>
      <span className="text-gray-600">{skill.level}%</span>
    </div>
    <progress
      className="progress progress-primary w-full"
      value={skill.level}
      max="100"
    ></progress>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="pt-[100px] sm:pt-[120px] bg-base-200 px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-14 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
