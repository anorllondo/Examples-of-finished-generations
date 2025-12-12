import React from 'react';

interface QuickLink {
  name: string;
  href: string;
}

interface ContactInfo {
  label: string;
  value: string;
}

const MakeupFooter: React.FC = () => {
  const quickLinks: QuickLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const contacts: ContactInfo[] = [
    { label: 'Phone', value: '+62 887 0103 01' },
    { label: 'Email', value: 'by.thaniaaptr@gmail.com' },
    { label: 'Instagram', value: 'by.thaniaaptr | thaniaaptr' },
    { label: 'WhatsApp', value: '+62 887 0103 01' },
    { label: 'Location', value: 'Jakarta, Indonesia' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#CC186E] to-[#8B1717] py-12">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mx-[130px] md:mx-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo/Brand */}
            <div>
              <h2 className="text-4xl font-normal text-white mb-4">
                by.thaniaaptr
              </h2>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[28px] font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-base font-normal text-[#F9EFEF] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-[28px] font-semibold text-white mb-6">
                Contacts
              </h3>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index}>
                    <p className="text-base font-semibold text-white mb-1">
                      {contact.label}
                    </p>
                    <p className="text-base font-normal text-[#F9EFEF]">
                      {contact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-white/20 text-center">
            <p className="text-sm text-[#F9EFEF]">
              © 2024 by.thaniaaptr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MakeupFooter;
