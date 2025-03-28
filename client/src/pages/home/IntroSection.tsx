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
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Modern Gym Interior" 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1637666062717-1c6bcf4908bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Professional Gym Equipment" 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
              alt="Professional Power Rack Area" 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
