import React from 'react';

interface Service {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

const MakeupServices: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Graduation',
      price: '550.000/Pax',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.',
      image: '/assets/makeup/service-graduation.png',
    },
    {
      id: 2,
      title: 'Wedding',
      price: '1.200.000/Pax',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.',
      image: '/assets/makeup/service-wedding.png',
    },
    {
      id: 3,
      title: 'Photo Shoot',
      price: '750.000/Pax',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.',
      image: '/assets/makeup/service-photoshoot.png',
    },
  ];

  return (
    <section id="services" className="relative py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[rgba(53,53,53,0.55)] z-0" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4">
        <div className="mx-[135px] md:mx-8">
          {/* Featured Collection Card */}
          <div className="bg-white rounded-lg px-[40px] py-[52px] md:px-6 md:py-8 mb-[81px]">
            <p className="text-lg font-normal tracking-[0.05em] mb-2">
              <span className="bg-gradient-to-br from-[#CC186E] to-[#8B1717] bg-clip-text text-transparent">
                NEW COLLECTION
              </span>
            </p>
            <h2 className="text-[28px] leading-[1.22] font-semibold tracking-[0.03em] text-[#251D1D] mb-4">
              BRING NEW MAKEUP TRENDS
            </h2>
            <p className="text-base leading-[1.22] font-normal text-[#535151] mb-[30px] max-w-[270px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue elit interdum ante purus gravida.
            </p>
            <a
              href="#"
              className="inline-block text-lg font-semibold tracking-[0.02em] bg-gradient-to-br from-[#CC186E] to-[#8B1717] bg-clip-text text-transparent hover:opacity-70 transition-opacity"
            >
              View More
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[285px] object-cover"
                />
                <div className="p-[12px]">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-2xl font-semibold tracking-[0.02em]">
                      <span className="bg-gradient-to-br from-[#CC186E] to-[#8B1717] bg-clip-text text-transparent">
                        {service.title}
                      </span>
                    </h3>
                    <span className="text-xs font-normal tracking-[0.02em] text-[#535151]">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-base leading-[1.22] font-normal tracking-[0.02em] text-[#535151]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeupServices;
