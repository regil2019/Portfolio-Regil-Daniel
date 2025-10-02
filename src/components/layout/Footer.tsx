import type { FooterContent } from '@/types';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

type Props = {
  content: FooterContent;
};

const Footer = ({ content }: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 py-8 px-4 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400 text-center w-full">
          &copy; {year} {content.copyright}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/regil2019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/regil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:danielnundal@gmail.com"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
