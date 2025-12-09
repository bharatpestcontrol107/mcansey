import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mcanseycompany/',
    icon: <FaFacebookF />,
    colorClass: 'text-blue-600 hover:text-blue-800',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    colorClass: 'text-blue-400 hover:text-blue-600',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: <FaLinkedinIn />,
    colorClass: 'text-blue-700 hover:text-blue-900',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
    colorClass: 'text-pink-500 hover:text-pink-700',
  },
];

const SocialLinks: React.FC = () => (
  <div className="space-x-2 sm:space-x-4 flex items-center">
    {socialLinks.map((link, index) => (
      <Link
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={link.colorClass}
      >
        {link.icon}
      </Link>
    ))}
  </div>
);

export default SocialLinks;
