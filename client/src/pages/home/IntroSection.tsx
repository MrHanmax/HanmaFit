import { CheckCircle } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default IntroSection;
