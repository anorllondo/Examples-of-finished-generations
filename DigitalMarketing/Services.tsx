import { Search, Globe, Video, FileText, Share2, MousePointerClick } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
}

const services: Service[] = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Search\nEngine Optimization',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Website design &\nDevelopment',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video editing &\nProduction',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Content\nWriting',
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social media\nMarketing',
  },
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    title: 'Pay per\nclick (PPC)',
  },
];

export const Services = () => {
  return (
    <section className="w-full px-8 lg:px-20 py-20" id="services">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Digital
            <br />
            Marketing Expertise
          </h2>
          <p className="text-lg text-[#C9C9C9]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1A1A1A] rounded-xl p-8 flex flex-col gap-4 hover:bg-[#222] transition-colors"
            >
              <div className="text-[#2DCA72]">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#C9C9C9] whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
