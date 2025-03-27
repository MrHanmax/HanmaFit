import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-['Bebas_Neue'] text-xl text-primary">ABOUT US</span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2">
            Meet the Team & Discover the Hanma Difference
          </h2>
        </div>
        
        <div className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Founder Portrait" 
                  className="rounded-lg shadow w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-4">Our Story</h3>
                <p className="mb-4">
                  Hanma Fitness Studio was founded with a clear mission: to provide the residents of Gulistan-e-Johar with a fitness experience that goes beyond the typical gym. We recognized that while there were cheaper options available in the area, there was a gap in quality coaching, personalized attention, and a truly supportive community.
                </p>
                <p className="mb-4">
                  Our founder, a certified fitness professional with over 10 years of experience, established Hanma to create a space where members could receive expert guidance, proper technique instruction, and genuine support on their fitness journeys.
                </p>
                <p>
                  Today, Hanma stands as Johar's premium fitness destination, where results aren't just promised – they're delivered through our commitment to excellence in coaching, programming, and community building.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-['Montserrat'] font-bold text-primary text-lg mb-2">Our Philosophy</h4>
                  <p>
                    We believe fitness should be accessible, effective, and enjoyable. Every member deserves personalized attention, proper guidance, and a supportive environment to achieve their goals, regardless of their starting point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trainer Profiles */}
        <h3 className="font-['Montserrat'] text-2xl font-bold text-center text-[#1D3557] mb-8">Meet Our Expert Coaches</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Head Coach */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583468986666-9b581e3bbcc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Head Coach" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-['Montserrat'] text-xl font-bold text-[#1D3557]">Ahmed Khan</h4>
              <p className="text-primary font-medium mb-3">Head Coach & MMA Specialist</p>
              <p className="mb-4">
                With 10+ years of experience and multiple fitness certifications, Ahmed specializes in MMA training and strength conditioning. His coaching philosophy focuses on proper technique and progressive overload for maximum results.
              </p>
              <div className="flex space-x-2">
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">MMA</span>
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Strength</span>
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">HIIT</span>
              </div>
            </div>
          </div>
          
          {/* Fitness Coach */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589690064908-0b5740a18149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fitness Coach" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-['Montserrat'] text-xl font-bold text-[#1D3557]">Sarah Malik</h4>
              <p className="text-primary font-medium mb-3">Zumba Instructor & Female Training Specialist</p>
              <p className="mb-4">
                Sarah leads our women-only training sessions and specializes in Zumba, aerobics, and women's fitness. Her energetic teaching style and supportive approach have helped countless members achieve their fitness goals.
              </p>
              <div className="flex space-x-2">
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Zumba</span>
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Aerobics</span>
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Nutrition</span>
              </div>
            </div>
          </div>
          
          {/* Strength Coach */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Strength Coach" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-['Montserrat'] text-xl font-bold text-[#1D3557]">Usman Ali</h4>
              <p className="text-primary font-medium mb-3">Strength & Conditioning Specialist</p>
              <p className="mb-4">
                Usman is our strength training expert with a background in sports science. He excels at designing progressive strength programs that build muscle, improve performance, and prevent injuries through proper form.
              </p>
              <div className="flex space-x-2">
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Strength</span>
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Bodybuilding</span>
                <span className="bg-neutral-50 px-2 py-1 rounded text-sm">Rehab</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Community Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-6 text-center">Our Community</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  At Hanma Fitness, we're more than just a gym – we're a family. Our members support each other, celebrate victories together, and create lasting friendships that extend beyond our studio walls.
                </p>
                <p>
                  We foster this community through regular events, challenges, and a supportive atmosphere where everyone feels welcome regardless of their fitness level. This sense of belonging is what keeps our members motivated and consistent.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Fitness Community" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
