import React from 'react';

interface NavItem {
  name: string;
  href: string;
}

const MakeupNavbar: React.FC = () => {
  const navItems: NavItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {/* Logo */}
      <div className="pt-[60px] pl-[135px] md:pl-8">
        <h1 className="text-2xl font-normal text-black">by.thaniaaptr</h1>
      </div>

      {/* Header Navigation */}
      <nav className="absolute top-[60px] right-[135px] md:right-8 md:top-[120px]">
        <ul className="flex items-center gap-[45px] md:gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-base font-medium text-black hover:bg-gradient-to-br hover:from-[#CC186E] hover:to-[#8B1717] hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MakeupNavbar;
