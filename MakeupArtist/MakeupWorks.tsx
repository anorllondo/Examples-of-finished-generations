import React from 'react';

interface WorkItem {
  id: number;
  title: string;
  image: string;
}

const MakeupWorks: React.FC = () => {
  const works: WorkItem[] = [
    { id: 1, title: 'Prewed', image: '/assets/makeup/work-prewed-1.png' },
    { id: 2, title: "The 90's", image: '/assets/makeup/work-90s-3e25c8.png' },
    { id: 3, title: 'Bridal', image: '/assets/makeup/work-bridal-7bdb0e.png' },
    { id: 4, title: 'Prewed', image: '/assets/makeup/work-prewed-2.png' },
    { id: 5, title: 'Photo Shoot', image: '/assets/makeup/work-photoshoot-1.png' },
    { id: 6, title: 'Photo Shoot', image: '/assets/makeup/work-photoshoot-2-4ccd74.png' },
    { id: 7, title: 'Prewed', image: '/assets/makeup/work-prewed-3.png' },
    { id: 8, title: 'Prewed', image: '/assets/makeup/work-prewed-4.png' },
  ];

  return (
    <section id="works" className="py-20 bg-[#F0F0F0]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mx-[135px] md:mx-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-[52px]">
            <h2 className="text-[28px] font-semibold tracking-[0.03em] text-black">
              MY WORKS
            </h2>
            <a
              href="#"
              className="text-lg font-semibold tracking-[0.02em] bg-gradient-to-br from-[#CC186E] to-[#8B1717] bg-clip-text text-transparent hover:opacity-70 transition-opacity"
            >
              See All
            </a>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {works.map((work) => (
              <div
                key={work.id}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[263px] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-normal tracking-[0.03em] text-[#251D1D]">
                    {work.title}
                  </h3>
                  <div className="w-full h-[1px] bg-[#251D1D] mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeupWorks;
