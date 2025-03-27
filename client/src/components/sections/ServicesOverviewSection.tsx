import { FC } from "react";

const ServicesOverviewSection: FC = () => {
  return (
    <section id="services" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-['Bebas_Neue'] text-xl text-primary">OUR SERVICES</span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2">
            Premium Fitness Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Discover our range of specialized training options designed to help you achieve your fitness goals with expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Personal Training Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Personal Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-3">
                Personal Training
              </h3>
              <p className="mb-4">
                One-on-one attention from certified coaches with customized plans tailored to your specific goals, whether weight loss, muscle gain, or performance.
              </p>
              <a href="#personal-training" className="text-primary font-['Montserrat'] font-bold flex items-center">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          
          {/* Group Classes Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Group Classes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-3">
                Group Classes
              </h3>
              <p className="mb-4">
                Energizing classes including MMA, Strength Training, and Zumba/Aerobics in a motivating group environment led by expert instructors.
              </p>
              <a href="#group-classes" className="text-primary font-['Montserrat'] font-bold flex items-center">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          
          {/* Community Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fitness Community" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-3">
                Supportive Community
              </h3>
              <p className="mb-4">
                Join a motivated community that celebrates each other's successes and provides the accountability needed to achieve long-term results.
              </p>
              <a href="#about" className="text-primary font-['Montserrat'] font-bold flex items-center">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#pricing" 
            className="bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold px-8 py-4 rounded-md inline-block transition"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
