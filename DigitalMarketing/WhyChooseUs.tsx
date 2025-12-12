export const WhyChooseUs = () => {
  return (
    <section className="w-full px-8 lg:px-20 py-20" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/assets/digital-marketing/why-choose-us.png"
            alt="Why Choose Zebra"
            className="w-full h-auto object-cover"
          />
          
          {/* Customer Badge */}
          <div className="absolute bottom-8 left-8 bg-white rounded-lg px-6 py-4 shadow-lg">
            <p className="text-sm font-medium text-black mb-1">Our Customers</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <span className="text-2xl font-bold text-black">+25K</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why should you
              <br />
              choose Zebra
            </h2>
            <p className="text-lg text-[#C9C9C9] max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitr
            </p>
          </div>

          <button className="bg-[#2DCA72] hover:bg-[#26b563] text-black font-medium px-8 py-3 rounded-full w-fit transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};
