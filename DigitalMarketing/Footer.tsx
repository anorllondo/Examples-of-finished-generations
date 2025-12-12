import { Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full px-8 lg:px-20 py-16 bg-[#0D0D0D]">
      <div className="flex flex-col gap-8">
        {/* Footer Content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Creative Digital
              <br />
              Marketing Agency
            </h2>
            <p className="text-lg text-[#C9C9C9] max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitr
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-[#2DCA72] hover:bg-[#26b563] text-black font-medium px-8 py-3 rounded-full transition-colors">
              Contact us
            </button>

            <span className="text-white text-base">Or</span>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2DCA72] flex items-center justify-center">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-medium text-white">
                +0 123 456-789
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
