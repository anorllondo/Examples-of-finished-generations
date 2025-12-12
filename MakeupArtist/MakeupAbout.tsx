import React from 'react';

const MakeupAbout: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="bg-white rounded-lg shadow-[0_8px_30px_rgba(38,38,38,0.15)] mx-[135px] md:mx-8 px-[100px] py-[59px] md:px-8 md:py-10">
          <h2 className="text-[28px] font-semibold tracking-[0.03em] text-[#251D1D] mb-[38px]">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-[30px] items-start">
            {/* Profile Photo */}
            <div className="w-full">
              <img
                src="/assets/makeup/profile-photo.png"
                alt="Thania - Professional Makeup Artist"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* About Text */}
            <div className="w-full">
              <p className="text-xl leading-[1.22] font-normal text-[#535151] tracking-[0.02em]">
                Hi. I'm Thania Certified Pro Artistic Makeup Lasalle College
                International. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed nulla sagittis eget semper semper.
                Euismod facilisi tristique duis maecenas id id.
              </p>
              <br />
              <p className="text-xl leading-[1.22] font-normal text-[#535151] tracking-[0.02em]">
                Cum ipsum, pellentesque volutpat id. Proin augue nunc, aliquet
                vel suspendisse non consequat dignissim tempus. Nibh etiam
                vitae, cum fusce eget. Amet donec pellentesque lorem integer
                duis bibendum bibendum ac imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeupAbout;
