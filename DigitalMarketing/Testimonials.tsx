interface Testimonial {
  avatar: string;
  name: string;
  position: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: '/assets/digital-marketing/testimonial-avatar-1.png',
    name: 'Zoe Mantis',
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    avatar: '/assets/digital-marketing/testimonial-avatar-2.png',
    name: 'Don Joe',
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
  {
    avatar: '/assets/digital-marketing/testimonial-avatar-3.png',
    name: 'Zoe Mantis',
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  },
];

export const Testimonials = () => {
  return (
    <section className="w-full px-8 lg:px-20 py-20 bg-[#0D0D0D]" id="testimonials">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#C9C9C9]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-base text-[#C9C9C9] leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2DCA72]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C9C9C9] opacity-30"></div>
          <div className="w-2 h-2 rounded-full bg-[#C9C9C9] opacity-30"></div>
        </div>
      </div>
    </section>
  );
};
