export const Hero = () => {
  return (
    <section className="w-full px-8 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Creative Digital
              <br />
              Marketing Agency
            </h1>
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

        {/* Hero Image */}
        <div className="relative">
          <img
            src="/assets/digital-marketing/hero-image.png"
            alt="Digital Marketing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
