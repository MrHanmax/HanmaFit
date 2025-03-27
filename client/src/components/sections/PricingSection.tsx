import { FC } from "react";

const PricingSection: FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-['Bebas_Neue'] text-xl text-primary">MEMBERSHIPS</span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2">
            Invest In Quality: Membership Options
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Choose the membership that fits your lifestyle and fitness goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Group Class Access */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition transform hover:shadow-xl">
            <div className="bg-[#1D3557] text-white p-6 text-center">
              <h3 className="font-['Montserrat'] text-2xl font-bold">Group Class Access</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">₨12,000</span>
                <span className="text-sm opacity-75">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Unlimited Group Classes</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Access to MMA, Strength & Zumba</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Standard Gym Access</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Fitness Assessment</span>
                </li>
                <li className="flex items-center opacity-50">
                  <i className="fas fa-times text-gray-400 mr-2"></i>
                  <span>Personal Training Sessions</span>
                </li>
                <li className="flex items-center opacity-50">
                  <i className="fas fa-times text-gray-400 mr-2"></i>
                  <span>Nutrition Coaching</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a 
                  href="#contact" 
                  className="block w-full bg-[#1D3557] hover:bg-opacity-90 text-white font-['Montserrat'] font-bold py-3 rounded-md transition"
                >
                  Select Plan
                </a>
              </div>
            </div>
          </div>
          
          {/* Unlimited Access - Featured */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-primary transform scale-105 md:scale-105 relative">
            <div className="absolute top-0 right-0">
              <div className="bg-[#FFD166] text-[#1D3557] font-bold py-1 px-4 text-sm rounded-bl-lg">
                MOST POPULAR
              </div>
            </div>
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="font-['Montserrat'] text-2xl font-bold">Unlimited Access</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">₨16,000</span>
                <span className="text-sm opacity-75">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Unlimited Group Classes</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Access to All Training Areas</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>2 Personal Training Sessions/Month</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Basic Nutrition Guidance</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Monthly Progress Assessment</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Priority Booking</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a 
                  href="#contact" 
                  className="block w-full bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold py-3 rounded-md transition"
                >
                  Select Plan
                </a>
              </div>
            </div>
          </div>
          
          {/* PT Packages */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition transform hover:shadow-xl">
            <div className="bg-[#1D3557] text-white p-6 text-center">
              <h3 className="font-['Montserrat'] text-2xl font-bold">PT Packages</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">₨20,000</span>
                <span className="text-sm opacity-75">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>12 PT Sessions/Month</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Full Gym Access</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>All Group Classes</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Customized Workout Plan</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Detailed Nutrition Coaching</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#2A9D8F] mr-2"></i>
                  <span>Bi-weekly Progress Tracking</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a 
                  href="#contact" 
                  className="block w-full bg-[#1D3557] hover:bg-opacity-90 text-white font-['Montserrat'] font-bold py-3 rounded-md transition"
                >
                  Select Plan
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Intro Offer Section */}
        <div className="bg-[#FFD166] bg-opacity-20 p-8 rounded-lg border border-[#FFD166]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-2">
                Free Trial Week for New Johar Residents
              </h3>
              <p>
                Experience everything Hanma Fitness has to offer with a complimentary 7-day trial. 
                Try our classes, meet our trainers, and see the difference quality makes.
              </p>
            </div>
            <div>
              <a 
                href="#trial" 
                className="bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold px-8 py-3 rounded-md inline-block transition"
              >
                Claim Free Trial
              </a>
            </div>
          </div>
        </div>
        
        {/* Value Proposition */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-4">Why Choose Hanma?</h3>
          <p className="text-lg">
            At Hanma Fitness, your membership is an investment in quality. We provide expert coaching, a motivating community, and a premium facility that delivers real, measurable results. Unlike cheaper options, we focus on proper technique, personalized attention, and a supportive environment that keeps you coming back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
