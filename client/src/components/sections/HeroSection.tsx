import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section id="home" className="relative bg-[#1D3557] text-white overflow-hidden">
      {/* Hero image overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Fitness training session" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] to-transparent opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-['Bebas_Neue'] text-5xl md:text-7xl mb-4 leading-tight">
            UNLEASH YOUR STRENGTH
          </h1>
          <h2 className="font-['Montserrat'] text-2xl md:text-3xl font-bold mb-6">
            Hanma Fitness - Johar's Premium Training Studio
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Expert Personal Training, Unique Group Classes (MMA, Strength, Zumba) & A Community That Delivers Results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#trial" 
              className="bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold px-8 py-4 rounded-md text-center text-lg transition transform hover:scale-105"
            >
              Book Your Free Trial Class
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-opacity-90 text-[#1D3557] font-['Montserrat'] font-bold px-8 py-4 rounded-md text-center text-lg transition"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
