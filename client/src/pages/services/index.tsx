import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">
            HANMA PROGRAMS: FIND YOUR PATH TO STRENGTH
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our range of fitness programs designed to help you achieve your goals and transform your life.
          </p>
        </div>

        {/* Personal Training Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Personal Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">PERSONAL TRAINING</h2>
              <p className="mb-4">
                Our personal training program offers one-on-one attention with certified coaches who will create a tailored fitness plan designed specifically for your goals. Whether you're looking to lose weight, build muscle, or improve your overall fitness, our trainers will guide you every step of the way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Personalized workout plans</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Nutrition guidance</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Regular progress assessments</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Certified expert trainers</span>
                </div>
              </div>
              <Link href="/services/personal-training">
                <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                  Learn More About PT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Group Classes Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Group Classes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">GROUP CLASSES</h2>
              <p className="mb-4">
                Our high-energy group classes offer a variety of workout styles to keep you motivated and engaged. From MMA and strength training to Zumba and aerobics, our classes are designed to deliver results while you enjoy the energy and camaraderie of group training.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>MMA Training</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Strength & Conditioning</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Zumba & Aerobics</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Female-only sessions available</span>
                </div>
              </div>
              <Link href="/services/group-classes">
                <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                  Explore Our Classes
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Open Gym Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1534368420009-621bfab9b8e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Open Gym" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">FLOOR TRAINING / OPEN GYM</h2>
              <p className="mb-4">
                For those who prefer to work out independently, our open gym access gives you the freedom to use our premium equipment and facilities at your own pace. Our staff is always available to provide assistance and guidance when needed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Access during all operating hours</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Premium equipment</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Supportive environment</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Staff assistance available</span>
                </div>
              </div>
              <Link href="/pricing">
                <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                  Check Membership Options
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Physiotherapy Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Physiotherapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">PHYSIOTHERAPY</h2>
              <p className="mb-4">
                Our physiotherapy services provide specialized care for injury recovery and performance enhancement. Our qualified professionals will work with you to address pain, improve mobility, and develop rehabilitation programs tailored to your specific needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Injury rehabilitation</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Performance enhancement</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Pain management</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Customized treatment plans</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                  Contact For Details
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/schedule">
            <Button 
              size="lg" 
              className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium inline-flex items-center"
            >
              View Schedule & Membership Options
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
