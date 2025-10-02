import { FaArrowRight, FaDownload } from 'react-icons/fa';

type HeroContent = {
  title: string;
  subtitle: string;
  paragrath: string;
  viewWork: string;
  downloadCV: string;
  image: string;
};

type Props = {
  content: HeroContent;
};

const Hero = ({ content }: Props) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
    >
      <div className="flex-1 flex flex-col justify-center items-start gap-6 pl-0 md:pl-16 mt-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          {content.title}{' '}
          <span className="text-indigo-400">{content.subtitle}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mb-6">
          {content.paragrath}
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow transition"
          >
            <FaArrowRight />
            {content.viewWork}
          </a>
          <a
            href="/cv.pdf"
            download
            className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow hover:bg-gray-200 transition"
          >
            <FaDownload />
            {content.downloadCV}
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="relative">
          <img
            src={content.image}
            alt="Profile"
            loading="lazy"
            className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-30 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;