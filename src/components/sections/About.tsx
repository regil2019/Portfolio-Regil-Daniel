import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa';
import React from 'react';

type AboutSection = {
  title: string;
  description: string;
  icon: string;
};

type AboutContent = {
  title: string;
  description: string;
  journey: string;
  journeyText: string;
  sections: AboutSection[];
};

type Props = {
  content: AboutContent;
};

const iconMap: Record<string, React.ReactNode> = {
  FaCode: <FaCode />,
  FaPalette: <FaPalette />,
  FaRocket: <FaRocket />,
  FaUsers: <FaUsers />,
};

const About = ({ content }: Props) => {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          {content.title.split(' ')[0]}{' '}
          <span className="text-indigo-400">{content.title.split(' ')[1]}</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-10 text-center max-w-2xl">{content.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 w-full">
          {content.sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center gap-4 border border-indigo-900 hover:border-indigo-500 transition"
            >
              <div className="text-indigo-400 text-3xl mb-2">
                {iconMap[section.icon]}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{section.title}</h3>
              <p className="text-gray-400 text-center">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 max-w-3xl w-full mx-auto border border-indigo-900 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-indigo-400 mb-4">{content.journey}</h3>
          <p className="text-gray-300">{content.journeyText}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
