import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  return (
    <section id="services-overview" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">OUR SERVICES</h2>
          <p className="text-lg max-w-2xl mx-auto">Discover the perfect training option to match your goals and preferences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Training Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Personal training session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-2xl">Personal Training</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">Get personalized attention and faster results with our certified personal trainers. Custom workout plans tailored to your specific goals.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>One-on-one expert guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Customized fitness programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Nutritional support</span>
                </li>
              </ul>
              <Link href="/services/personal-training">
                <Button className="w-full bg-[#1d3557] hover:bg-[#1d3557]/90 text-white font-medium">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Group Classes Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Group fitness class" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-2xl">Group Classes</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">High-energy, motivating group workouts with a variety of class types. Experience the energy of training with others.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>MMA training</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Strength & conditioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Zumba & aerobics</span>
                </li>
              </ul>
              <Link href="/services/group-classes">
                <Button className="w-full bg-[#1d3557] hover:bg-[#1d3557]/90 text-white font-medium">
                  View Classes
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Community Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Fitness community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-2xl">Community</h3>
            </div>
            <div className="p-6">
              <p className="mb-4">Join a supportive fitness family that keeps you motivated and accountable. Train in a positive, encouraging environment.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Supportive training environment</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Community challenges & events</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Accountability partnerships</span>
                </li>
              </ul>
              <Link href="/about">
                <Button className="w-full bg-[#1d3557] hover:bg-[#1d3557]/90 text-white font-medium">
                  Meet Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/schedule">
            <Button 
              size="lg" 
              className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium inline-flex items-center"
            >
              View Class Schedule
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
