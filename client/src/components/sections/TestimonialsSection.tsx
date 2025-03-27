import { FC } from "react";

const TestimonialsSection: FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-['Bebas_Neue'] text-xl text-primary">SUCCESS STORIES</span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2">
            Real People, Real Results
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Hear from our members who have transformed their lives at Hanma Fitness Studio.
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Testimonial 1 */}
          <div className="bg-neutral-50 p-8 rounded-lg relative">
            <div className="text-primary opacity-20 absolute top-4 left-4">
              <i className="fas fa-quote-left text-6xl"></i>
            </div>
            <div className="relative z-10">
              <p className="italic mb-6 text-lg">
                "After trying several gyms in Johar, I finally found Hanma. The difference in coaching quality is incredible. In just 3 months of personal training, I've lost 12kg and gained strength I never thought possible. The trainers actually care about your form and progress."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Testimonial Author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold">Aisha Siddiqui</h4>
                  <p className="text-sm">Weight Loss Journey</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-neutral-50 p-8 rounded-lg relative">
            <div className="text-primary opacity-20 absolute top-4 left-4">
              <i className="fas fa-quote-left text-6xl"></i>
            </div>
            <div className="relative z-10">
              <p className="italic mb-6 text-lg">
                "The MMA classes at Hanma are outstanding. I've not only learned self-defense but also gotten in the best shape of my life. The community here pushes you to improve every day, and the coaches know how to challenge you while keeping training safe."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                    alt="Testimonial Author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold">Kamran Ahmed</h4>
                  <p className="text-sm">MMA Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Before & After Section */}
        <div className="bg-neutral-50 p-8 rounded-lg mb-12">
          <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-6 text-center">
            Transformation Stories
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Transformation 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="sm:w-1/2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Before Transformation" 
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#1D3557] text-white px-3 py-1 font-bold">
                      BEFORE
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="After Transformation" 
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="font-['Montserrat'] font-bold text-lg">Farhan's 6-Month Transformation</h4>
              <p>Lost 18kg and built significant muscle through our Strength Training program and nutrition guidance.</p>
            </div>
            
            {/* Transformation 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="sm:w-1/2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Before Transformation" 
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#1D3557] text-white px-3 py-1 font-bold">
                      BEFORE
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="After Transformation" 
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary text-white px-3 py-1 font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="font-['Montserrat'] font-bold text-lg">Nadia's Fitness Journey</h4>
              <p>Transformed her body composition and energy levels through our Women's Only classes and Personal Training.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#trial" 
            className="bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold px-8 py-4 rounded-md inline-block transition"
          >
            Start Your Transformation - Book a Free Trial!
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
