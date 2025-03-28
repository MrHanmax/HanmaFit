import { CheckCircle } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-6 text-[#1d3557]">
            WELCOME TO HANMA FITNESS STUDIO
          </h2>
          <p className="text-lg mb-8">
            Located in the heart of Gulistan-e-Johar, Hanma Fitness is dedicated to providing quality coaching, personalized attention, and a motivating community atmosphere. Whether you're looking for individual training, high-energy group classes, or specialized programs, our expert coaches will help you achieve real, measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-[#457b9d]">
              <CheckCircle className="mr-2 text-[#FFA500]" size={20} />
              <span>Expert Coaching</span>
            </div>
            <div className="flex items-center text-[#457b9d]">
              <CheckCircle className="mr-2 text-[#FFA500]" size={20} />
              <span>Measurable Results</span>
            </div>
            <div className="flex items-center text-[#457b9d]">
              <CheckCircle className="mr-2 text-[#FFA500]" size={20} />
              <span>Supportive Community</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/images/gym-interior-1.jpg" 
              alt="Hanma Fitness Training Area" 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/images/gym-interior-2.jpg" 
              alt="Hanma Fitness Equipment" 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/images/gym-interior-3.jpg" 
              alt="Hanma Fitness Power Rack" 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
