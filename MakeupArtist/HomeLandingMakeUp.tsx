import React from 'react';
import MakeupNavbar from './MakeupNavbar';
import MakeupHero from './MakeupHero';
import MakeupAbout from './MakeupAbout';
import MakeupServices from './MakeupServices';
import MakeupWorks from './MakeupWorks';
import MakeupCTA from './MakeupCTA';
import MakeupFooter from './MakeupFooter';

const HomeLandingMakeUp: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F9F9F9] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute top-0 left-0 right-0 h-[706px] bg-[#F0F0F0] z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <MakeupNavbar />
        <MakeupHero />
      </div>

      <MakeupAbout />
      <MakeupServices />
      <MakeupWorks />
      <MakeupCTA />
      <MakeupFooter />
    </div>
  );
};

export default HomeLandingMakeUp;
