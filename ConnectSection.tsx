import React from 'react';
import {
  Link as LinkIcon,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  Figma,
  Package,
  Layers,
  Globe,
  MessageCircle,
  Share2,
} from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const ConnectSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Contact me',
      icon: <LinkIcon className="w-6 h-6" />,
      href: '#contact',
    },
    {
      name: 'Extrabold UI',
      icon: <Globe className="w-6 h-6" />,
      href: '#extrabold',
    },
    {
      name: 'Gumroad',
      icon: <Package className="w-6 h-6" />,
      href: '#gumroad',
    },
    {
      name: 'Figma',
      icon: <Figma className="w-6 h-6" />,
      href: '#figma',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: '#linkedin',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: '#twitter',
    },
    {
      name: 'Layers.to',
      icon: <Layers className="w-6 h-6" />,
      href: '#layers',
    },
    {
      name: 'Behance',
      icon: <Globe className="w-6 h-6" />,
      href: '#behance',
    },
    {
      name: 'Dribble',
      icon: <Dribbble className="w-6 h-6" />,
      href: '#dribble',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: '#instagram',
    },
    {
      name: 'Threads',
      icon: <MessageCircle className="w-6 h-6" />,
      href: '#threads',
    },
    {
      name: 'Mastodon',
      icon: <Share2 className="w-6 h-6" />,
      href: '#mastodon',
    },
  ];

  return (
    <section className="relative w-full min-h-[960px] bg-[#EDE9FE] overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Decorative Ellipse - Right */}
      <div className="absolute right-[-100px] top-[167px] w-[730px] h-[730px] rounded-full bg-gradient-to-br from-[#DDD6FE] to-[#C4B5FD] opacity-40 blur-3xl pointer-events-none" />

      {/* Decorative Ellipse - Left */}
      <div className="absolute left-[-200px] top-[-146px] w-[593px] h-[593px] rounded-full bg-gradient-to-br from-[#C4B5FD] to-[#DDD6FE] opacity-40 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1077px] w-full flex flex-col items-center gap-20">
        {/* Decorative Icon Top */}
        <div className="relative w-[150px] h-[166px]">
          {/* TODO: Replace with actual decorative icon from Figma node '1102:353' */}
          <div className="absolute left-0 top-[17px] w-[134px] h-[134px] bg-[#F5F3FF] rounded-full border-[5px] border-[#DDD6FE]" />
          <div className="absolute left-[67px] top-0 w-[83px] h-[166px] bg-white rounded-full border-[5px] border-[#DDD6FE] flex items-center justify-center">
            <div className="w-12 h-12 bg-[#C4B5FD] rounded-full" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center gap-6 px-4">
          {/* Headings */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[88px] leading-[1.1] font-extrabold text-[#0F172A] md:text-7xl sm:text-5xl">
              Let's Connect
            </h2>
            <p className="text-[32px] leading-[1.6] font-light text-[#0F172A] max-w-3xl md:text-2xl sm:text-xl">
              Follow me for more resources & inspiration, or to get in touch
            </p>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center items-center gap-11 w-full px-4 md:gap-8 sm:gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center justify-center gap-1.5 text-[#0F172A] hover:text-[#8B5CF6] transition-colors duration-200 group"
            >
              <span className="text-white group-hover:text-[#8B5CF6] transition-colors">
                {link.icon}
              </span>
              <span className="text-lg leading-[1.6] font-normal whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

