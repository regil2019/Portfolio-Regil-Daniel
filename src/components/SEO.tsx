import React from 'react';
import { Helmet } from 'react-helmet';
import type { Content } from '@/types';

interface SEOProps {
  content: Content;
  currentLanguage: string;
  url: string;
}

const SEO: React.FC<SEOProps> = ({ content, currentLanguage, url }) => {
  const title = content.hero?.title + ' ' + content.hero?.subtitle || "Regil's Portfolio";
  const description = content.hero?.paragrath || 'Software Engineer passionate about creating incredible digital experiences and innovative solutions.';
  const image = content.hero?.image || '/image/regil.png';

  return (
    <Helmet>
      <html lang={currentLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Software Engineer, Full Stack Developer, AI Agents, React, Next.js, Portfolio, Regil" />
      <meta name="author" content="Regil" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
