
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGit, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';
import React from "react";
type Skill = {
  name: string;
  percentage: number;
};

type SkillsContent = {
  title: string;
  subtitle: string;
  frontend: string;
  backend: string;
  tools: string;
  skills: Skill[];
};

type Props = {
  content: SkillsContent;
};

const iconMap: Record<string, React.ReactNode> = {
  React: <FaReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-gray-200" />,
  Git: <FaGit className="text-orange-400" />,
  AWS: <FaAws className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Docker: <FaDocker className="text-blue-300" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  Python: <FaPython className="text-yellow-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-700" />,
  MongoDB: <SiMongodb className="text-green-700" />,
};

const getCategory = (name: string) => {
  if (["React", "Next.js", "TypeScript", "Tailwind CSS"].includes(name)) return "Frontend";
  if (["Node.js", "Python", "PostgreSQL", "MongoDB"].includes(name)) return "Backend";
  return "Tools";
};

const Skills = ({ content }: Props) => {
  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-4 text-center">
          {content.title.split(' ')[0]}{' '}
          <span className="text-indigo-400">{content.title.split(' ')[1]}</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">{content.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all">
          {["Frontend", "Backend", "Tools"].map((category) => (
            <div key={category}>
              <h3 className={`text-xl font-bold mb-4 ${
                category === "Frontend" ? "text-blue-400" : category === "Backend" ? "text-green-400" : "text-purple-400"
              }`}>
                {content[category.toLowerCase() as "frontend" | "backend" | "tools"]}
              </h3>
              <div className="flex flex-col gap-6">
                {content.skills
                  .filter((skill) => getCategory(skill.name) === category)
                  .map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-gray-900 rounded-xl p-4 shadow">
                      <div className="text-2xl">{iconMap[skill.name]}</div>
                      <span className="font-semibold text-white w-32">{skill.name}</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-3 mx-2">
                        <div
                          className={`h-3 rounded-full ${
                            category === "Frontend"
                              ? "bg-blue-500"
                              : category === "Backend"
                              ? "bg-green-500"
                              : "bg-purple-500"
                          }`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-300">{skill.percentage}%</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
