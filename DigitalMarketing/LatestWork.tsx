interface WorkItem {
  image: string;
  title: string;
  description: string;
}

const works: WorkItem[] = [
  {
    image: '/assets/digital-marketing/work-card-1.png',
    title: 'Artem - Digital Marketing\ncampaign',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    image: '/assets/digital-marketing/work-card-2.png',
    title: 'Mayhem - Search engine\nOptimization',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    image: '/assets/digital-marketing/work-card-3.png',
    title: 'Basic - Pay per click\n(PPC)',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
];

export const LatestWork = () => {
  return (
    <section className="w-full px-8 lg:px-20 py-20" id="work">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
          Our latest work
        </h2>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.title} className="flex flex-col gap-4">
              <div className="aspect-[3/2] overflow-hidden rounded-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white whitespace-pre-line">
                  {work.title}
                </h3>
                <p className="text-base text-[#C9C9C9] leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
