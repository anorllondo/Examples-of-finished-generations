interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'About Us', href: '#about', isActive: true },
  { label: 'Services', href: '#services' },
  { label: 'Latest Work', href: '#work' },
  { label: 'Testmonials', href: '#testimonials' },
];

export const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 lg:px-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-bold text-white">Zebra</h1>
          
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-base relative ${
                    link.isActive ? 'text-[#C9C9C9]' : 'text-[#C9C9C9] hover:text-white'
                  } transition-colors`}
                >
                  {link.label}
                  {link.isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2DCA72]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-[#2DCA72] hover:bg-[#26b563] text-black font-medium px-8 py-3 rounded-full transition-colors">
          Contact us
        </button>
      </div>
    </nav>
  );
};
