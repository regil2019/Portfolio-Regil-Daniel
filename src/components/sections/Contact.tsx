import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { sendEmail } from '@/utils/emailjs';

type ContactContent = {
  title: string;
  subtitle: string;
  infoTitle: string;
  infoText: string;
  email: string;
  phone: string;
  location: string;
  whatsapp: string;
  chatWithMe: string;
  formTitle: string;
  name: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  successMessage: string;
  errorMessage: string;
};

type Props = {
  content: ContactContent;
};

export default function Contact({ content }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data on submit:', formData);
    // Trim inputs to avoid spaces-only values
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      console.log('Validation failed: some fields are empty or whitespace only');
      setFormStatus('error');
      return;
    }
    try {
      await sendEmail(formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-white mb-4 text-center">
          {content.title.split(' ')[0]}{' '}
          <span className="text-indigo-400">{content.title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">{content.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{content.infoTitle}</h3>
            <p className="text-gray-300 mb-8">{content.infoText}</p>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 border border-indigo-900">
                <FaEnvelope className="text-white text-2xl" />
                <div>
                  <span className="block text-white font-semibold">{content.email}</span>
                  <span className="text-gray-400">danielnundal@gmail.com</span>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 border border-indigo-900">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                <div>
                  <span className="block text-white font-semibold">{content.phone}</span>
                  <span className="text-gray-400">+79197250946</span>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 flex items-center gap-4 border border-indigo-900">
                <a href="https://api.whatsapp.com/send?phone=79197250946&amp;text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20e%20como%20podemos%20colaborar.%20Obrigado!%20%0AHello!%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20how%20we%20can%20collaborate.%20Thank%20you!%20%0A%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85%20%D0%B8%20%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0.%20%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full">
                  <FaWhatsapp className="text-[#25D366] text-2xl" />
                  <div>
                    <span className="block text-white font-semibold">{content.chatWithMe}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{content.formTitle}</h3>
            <form className="flex flex-col gap-6" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={content.namePlaceholder}
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder={content.emailPlaceholder}
                  className="bg-gray-800 text-white px-4 py-3 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <input
                type="text"
                placeholder={content.subjectPlaceholder}
                className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <textarea
                placeholder={content.messagePlaceholder}
                className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow hover:from-indigo-600 hover:to-purple-600 transition"
              >
                {content.send}
              </button>
            </form>
            {formStatus === 'success' && (
              <p className="mt-4 text-green-500 font-semibold">{content.successMessage}</p>
            )}
            {formStatus === 'error' && (
              <p className="mt-4 text-red-500 font-semibold">{content.errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
