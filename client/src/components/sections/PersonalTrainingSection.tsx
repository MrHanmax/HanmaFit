import { FC } from "react";

const PersonalTrainingSection: FC = () => {
  return (
    <section id="personal-training" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Personal Training Session" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <span className="font-['Bebas_Neue'] text-xl text-primary">PERSONALIZED TRAINING</span>
            <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2 mb-6">
              Achieve Your Goals Faster with 1-on-1 Expert Coaching
            </h2>
            <p className="mb-6">
              Our personal training sessions are designed to maximize your results through tailored workout plans, nutritional guidance, and constant motivation from our certified trainers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-check-circle text-[#2A9D8F] text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-['Montserrat'] font-semibold text-lg">Personalized Plans</h3>
                  <p>Workouts and nutrition advice customized to your body type, goals, and lifestyle</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-check-circle text-[#2A9D8F] text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-['Montserrat'] font-semibold text-lg">Faster Results</h3>
                  <p>Efficiently achieve your fitness goals with focused, expert guidance and accountability</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-check-circle text-[#2A9D8F] text-xl"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-['Montserrat'] font-semibold text-lg">Injury Prevention</h3>
                  <p>Learn proper form and techniques to stay safe and maximize effectiveness</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <h4 className="font-['Montserrat'] font-bold mb-2">Our Process:</h4>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Initial Consultation & Goal Setting</li>
                <li>Fitness Assessment & Measurements</li>
                <li>Customized Program Development</li>
                <li>Regular Progress Tracking & Adjustments</li>
              </ol>
            </div>
            
            <a 
              href="#trial" 
              className="bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold px-8 py-3 rounded-md inline-block transition"
            >
              Book Your FREE PT Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;
