import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClassSchedule from "@/components/ClassSchedule";

const SchedulePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Group fitness class" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              CLASS SCHEDULE
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Find the perfect time to join us at Hanma Fitness Studio in Gulistan-e-Johar.
            </p>
          </div>
        </div>
      </section>
      
      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">WEEKLY CLASS SCHEDULE</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We offer a variety of classes throughout the week to fit your schedule. Check out our timetable below.
            </p>
          </div>
          
          <ClassSchedule />
          
          <div className="mt-8 text-center text-gray-600">
            <p>* Personal Training sessions available by appointment throughout all operating hours.</p>
            <p>* Sunday: Closed</p>
          </div>
          
          <div className="mt-12 bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl mb-4 text-[#1d3557] text-center">ABOUT OUR CLASS TYPES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-semibold text-xl mb-3 text-[#1d3557]">MMA Training</h4>
                <p className="mb-2">
                  Learn striking, grappling, and self-defense techniques in our high-energy MMA classes.
                </p>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#457b9d]/40 mr-1"></span>
                    <span>60 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#457b9d]/40 mr-1"></span>
                    <span>High intensity</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-[#1d3557]">Strength Training</h4>
                <p className="mb-2">
                  Build muscle, increase power, and improve overall strength in our comprehensive resistance training classes.
                </p>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500]/40 mr-1"></span>
                    <span>45 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500]/40 mr-1"></span>
                    <span>Moderate-High</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-[#1d3557]">Zumba</h4>
                <p className="mb-2">
                  Dance your way to fitness with fun, energetic sessions that combine cardio exercise with vibrant music and movements.
                </p>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#a8dadc]/40 mr-1"></span>
                    <span>50 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#a8dadc]/40 mr-1"></span>
                    <span>Moderate</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-xl mb-3 text-[#1d3557]">Aerobics</h4>
                <p className="mb-2">
                  Boost your cardiovascular fitness with our high-energy aerobics classes that combine rhythm and movement.
                </p>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#a8dadc]/40 mr-1"></span>
                    <span>50 min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#a8dadc]/40 mr-1"></span>
                    <span>Moderate</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-3 text-[#1d3557]">Female-Only Hours (1:00 PM - 5:00 PM)</h4>
              <p className="mb-2">
                All our classes are available in female-only formats during our dedicated women's hours. 
                These sessions are led by our female trainer, Ayesha, in a comfortable, women-only environment.
              </p>
              <div className="flex items-center text-sm text-[#FFA500] font-medium">
                <span className="inline-block w-3 h-3 rounded-full bg-pink-300 mr-1"></span>
                <span>All female-only classes are marked in pink on the schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">READY TO JOIN A CLASS?</h2>
            <p className="text-lg mb-6">
              Experience our energetic classes and expert instruction with a free trial class. 
              Choose any class from our schedule and see the Hanma difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/trial">
                <Button 
                  size="lg" 
                  className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium inline-flex items-center"
                >
                  Try a Free Class
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557]/10"
                >
                  View Membership Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
