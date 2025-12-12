import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PlanFeature {
  id: number;
  name: string;
}

const MakeupCTA: React.FC = () => {
  const features: PlanFeature[] = [
    { id: 1, name: 'Wedding' },
    { id: 2, name: 'SFX Makeup' },
    { id: 3, name: 'Photo Shoot' },
    { id: 4, name: 'Graduation' },
  ];

  return (
    <section className="py-20 bg-[#F0F0F0]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="relative bg-white rounded-lg shadow-[0_0_30px_rgba(38,38,38,0.15)] mx-[135px] md:mx-8 px-[100px] py-[56px] md:px-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="w-full">
              <p className="text-lg font-semibold tracking-[0.05em] mb-4">
                <span className="bg-gradient-to-br from-[#CC186E] to-[#8B1717] bg-clip-text text-transparent">
                  CHOOSE YOUR PLAN
                </span>
              </p>
              
              <h2 className="text-5xl leading-[1.22] font-semibold tracking-[0.03em] text-[#251D1D] mb-6 md:text-4xl">
                Get Discount
                <br />
                up to 60% off
                <br />
                for Limited Time
              </h2>

              {/* Decorative underline */}
              <div className="relative w-[351px] h-[20px] mb-8">
                <svg
                  width="351"
                  height="20"
                  viewBox="0 0 351 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M2 17.5C58.5 2.5 292.5 -7.5 349 17.5"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#CC186E" />
                      <stop offset="100%" stopColor="#8B1717" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-white fill-white" />
                    <span className="text-lg font-medium text-[#535151]">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center px-[15px] py-[10px] min-w-[270px] h-[58px] bg-gradient-to-br from-[#CC186E] to-[#8B1717] rounded-[15px] text-white text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#CC186E]">
                Booking Now
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full">
              <img
                src="/assets/makeup/cta-background.png"
                alt="Makeup Artist Work"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeupCTA;
