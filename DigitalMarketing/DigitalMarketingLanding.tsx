import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { WhyChooseUs } from './WhyChooseUs';
import { LatestWork } from './LatestWork';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export const DigitalMarketingLanding = () => {
  return (
    <div className="w-full min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <LatestWork />
      <Testimonials />
      <Footer />
    </div>
  );
};
