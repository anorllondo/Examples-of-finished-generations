import React from 'react';

const MakeupHero: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="relative mt-[160px] ml-[135px] mr-[135px] md:ml-8 md:mr-8 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="w-full">
            {/* Main Heading with Gradient */}
            <h2 className="text-[64px] leading-[1.22] font-bold tracking-[0.02em] mb-8 md:text-5xl sm:text-4xl">
              <span
                className="bg-gradient-to-br from-[#CC186E] to-[#8B1717] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                PROFESSIONAL
                <br />
                MAKEUP ARTIST
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl leading-[1.22] font-normal text-[#251D1D] mb-8 max-w-[670px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              enim donec semper pellentesque vitae. Cras ac fringilla
              suspendisse mi velit quis. Odio eu posuere.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center px-[15px] py-[10px] min-w-[200px] h-[58px] bg-gradient-to-br from-[#CC186E] to-[#8B1717] rounded-[15px] text-white text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Booking Now
            </button>
          </div>

          {/* Right Hero Image */}
          <div className="w-full">
            <img
              src="/assets/makeup/hero-image.png"
              alt="Professional Makeup Artist Portfolio"
              className="w-full h-auto object-cover rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.05)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeupHero;
