import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Project = {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  code: string;
  image: string;
};

type ProjectsContent = {
  title: string;
  subtitle: string;
  filterAll: string;
  projects: Project[];
};

type Props = {
  content: ProjectsContent;
};

const Projects = ({ content }: Props) => {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-white mb-4 text-center">
          {content.title.split(' ')[0]}{' '}
          <span className="text-indigo-400">{content.title.split(' ')[1]}</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">{content.subtitle}</p>
        <div className="flex flex-wrap gap-6 justify-center">
          {content.projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl shadow-lg flex flex-col justify-between w-full max-w-sm border border-indigo-900 hover:border-indigo-500 transition overflow-hidden"
            >
              {/* Imagem de fundo no topo do card */}
              <div className="h-48 w-full relative">
                <img
                  src={project.image || '/image/default.png'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href="#"
                    className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    {project.demo}
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    {project.code}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;