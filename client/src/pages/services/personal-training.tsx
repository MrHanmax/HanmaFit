import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

const PersonalTrainingPage = () => {
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
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Personal training session" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              ACHIEVE YOUR GOALS FASTER WITH 1-ON-1 EXPERT COACHING IN JOHAR
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Our personal training program is designed to give you the individualized attention and expertise you need to reach your fitness goals efficiently and safely.
            </p>
            <Link href="/trial">
              <Button size="lg" className="bg-[#FFA500] hover:bg-amber-600 text-white font-semibold text-lg">
                Book Your FREE PT Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="font-bold text-3xl mb-6 text-[#1d3557]">PERSONALIZED TRAINING FOR MAXIMUM RESULTS</h2>
              <p className="text-lg mb-6">
                At Hanma Fitness, we believe that personal training is the most effective way to achieve your fitness goals. Our certified trainers will work with you to create a customized program that addresses your specific needs, abilities, and aspirations.
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold text-xl mb-4 text-[#1d3557]">THE PERSONAL TRAINING PROCESS</h3>
                <div className="space-y-6 mb-6">
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Initial Consultation</h4>
                      <p>We start with a comprehensive discussion about your goals, fitness history, and any limitations or concerns you may have.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Assessment</h4>
                      <p>Our trainers will conduct a thorough fitness assessment to establish your baseline and identify areas for improvement.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Customized Plan</h4>
                      <p>Based on your assessment, we'll create a tailored workout and nutrition plan designed to help you achieve your goals efficiently.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-8 w-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Ongoing Support</h4>
                      <p>Your trainer will provide continuous guidance, motivation, and plan adjustments to ensure you stay on track and see results.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold text-xl mb-4 text-[#1d3557]">THE BENEFITS OF PERSONAL TRAINING</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Customized workout programs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Proper exercise technique</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Faster, safer results</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Nutritional guidance</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Increased motivation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Adaptable as you progress</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Injury prevention</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Accountability and support</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="Testimonial from Faisal" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#1d3557]">Faisal R.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic mb-2">
                  "The personal training at Hanma is worth every rupee. Omar designed a program specifically for my goals, and I've seen more progress in 3 months than I did in years at other gyms. The community aspect keeps me accountable—I never want to miss a session!"
                </p>
                <p className="text-[#FFA500] font-semibold">Goal: Muscle Building</p>
              </div>
              
              <div className="text-center md:text-left">
                <Link href="/trial">
                  <Button 
                    size="lg" 
                    className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium inline-flex items-center"
                  >
                    Book Your FREE PT Consultation
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Personal training session" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-[#1d3557] text-white p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-4">CONTACT US DIRECTLY</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3 flex-shrink-0" size={20} />
                    <a href="tel:03167911505" className="hover:text-[#FFA500] transition-colors duration-300">
                      Call: 03167911505
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaWhatsapp className="mr-3 flex-shrink-0" size={20} />
                    <a href="https://wa.me/923167911505" className="hover:text-[#FFA500] transition-colors duration-300">
                      WhatsApp: 03167911505
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-[#1d3557]">OUR EXPERT TRAINERS</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" 
                        alt="Ahmed Khan" 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ahmed Khan</h4>
                      <p className="text-sm text-[#FFA500]">Head Coach / MMA Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80" 
                        alt="Omar Raza" 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Omar Raza</h4>
                      <p className="text-sm text-[#FFA500]">Strength & Conditioning Coach</p>
                    </div>
                  </div>
                  <Link href="/about">
                    <Button variant="outline" className="w-full mt-2">
                      Meet All Trainers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="font-bold text-2xl mb-4 text-[#1d3557]">READY TO TRANSFORM YOUR FITNESS?</h3>
                <p className="text-lg mb-4">
                  Take the first step toward achieving your fitness goals with a free personal training consultation. Our expert trainers are ready to help you create a customized plan for success.
                </p>
              </div>
              <div className="md:w-1/3">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="w-full bg-[#FFA500] hover:bg-amber-600 text-white font-medium"
                  >
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalTrainingPage;
