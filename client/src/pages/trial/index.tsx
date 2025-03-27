import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import TrialForm from "@/components/TrialForm";

const TrialPage = () => {
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
              CLAIM YOUR FREE TRIAL CLASS
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Experience the Hanma difference firsthand with a complimentary trial class at our Gulistan-e-Johar studio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">WHY TRY HANMA FITNESS?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Discover what makes our studio the premier fitness destination in Gulistan-e-Johar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#FFA500]/10 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Expert Coaching</h3>
              <p>
                Our certified trainers deliver personalized guidance and expert instruction to help you achieve your fitness goals safely and efficiently.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#FFA500]/10 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Supportive Community</h3>
              <p>
                Join a welcoming fitness family where members motivate each other and celebrate successes together in a positive, energizing atmosphere.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-[#FFA500]/10 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Diverse Programs</h3>
              <p>
                Choose from a variety of training options including MMA, Strength Training, Zumba, Aerobics, and Personal Training to match your preferences and goals.
              </p>
            </div>
          </div>
          
          {/* Class Options */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="font-bold text-2xl mb-6 text-center text-[#1d3557]">CHOOSE YOUR FREE TRIAL CLASS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555597673-b21d5c3cdd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="MMA training class" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-white font-bold text-xl">MMA Training</h4>
                </div>
                <div className="p-4">
                  <p className="mb-4">Learn striking, grappling, and self-defense techniques in our high-energy MMA classes.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Expert instruction for all levels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Improve strength and cardio</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Strength training class" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-white font-bold text-xl">Strength Training</h4>
                </div>
                <div className="p-4">
                  <p className="mb-4">Build muscle, increase power, and improve overall strength with our comprehensive programs.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Personalized weight training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Functional fitness focus</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Zumba class" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-white font-bold text-xl">Zumba & Aerobics</h4>
                </div>
                <div className="p-4">
                  <p className="mb-4">Dance your way to fitness with fun, energetic sessions that combine cardio with vibrant music.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Fun, high-energy workouts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Great for all fitness levels</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Personal training" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-white font-bold text-xl">Personal Training</h4>
                </div>
                <div className="p-4">
                  <p className="mb-4">Get 1-on-1 attention with custom workout plans designed for your specific fitness goals.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={16} />
                      <span>Faster, better results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Female-Only Section */}
          <div className="bg-pink-50 rounded-lg p-8 max-w-4xl mx-auto mb-16">
            <h3 className="font-bold text-2xl mb-4 text-[#1d3557] text-center">FEMALE-ONLY TRAINING SESSIONS</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1609899464926-c34721ed9b0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Female training session" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  We offer dedicated female-only training sessions daily from 1:00 PM to 5:00 PM, led by our expert female trainer, Ayesha. These sessions provide a comfortable, supportive environment where women can focus on their fitness goals.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-[#FFA500] font-medium">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1" size={16} />
                    <span>Women's MMA</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1" size={16} />
                    <span>Women's Strength Training</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1" size={16} />
                    <span>Women's Zumba & Aerobics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trial Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <TrialForm />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">WHAT OUR MEMBERS SAY</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what people who started with a free trial have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Testimonial from Imran" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1d3557]">Imran S.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mb-4 italic">
                "I came for a free trial and was immediately impressed by the quality of coaching and facilities. The trainers made me feel welcome and showed genuine interest in my goals. I signed up that same day!"
              </p>
              <p className="text-[#FFA500] font-semibold">Now a 6-month member</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Testimonial from Sana" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1d3557]">Sana K.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mb-4 italic">
                "The female-only trial class was exactly what I needed. I felt comfortable, supported, and challenged. Ayesha is an amazing instructor who understands how to motivate women of all fitness levels."
              </p>
              <p className="text-[#FFA500] font-semibold">Regular in women's classes</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
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
              <p className="mb-4 italic">
                "My free personal training session convinced me this was the gym for me. Omar assessed my fitness level and created a plan that was challenging but achievable. The difference in coaching quality is obvious."
              </p>
              <p className="text-[#FFA500] font-semibold">PT client for 3 months</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-2xl mb-6 text-center text-[#1d3557]">FREQUENTLY ASKED QUESTIONS</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-[#1d3557]">What should I bring to my free trial?</h4>
                <p>
                  Please bring comfortable workout clothes, a water bottle, a small towel, and your enthusiasm! Changing rooms are available at the studio.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-[#1d3557]">Do I need to be fit already to try a class?</h4>
                <p>
                  Not at all! Our classes are designed for all fitness levels, from beginners to advanced. Our trainers will help modify exercises to match your current abilities.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-[#1d3557]">Is there any obligation to join after the free trial?</h4>
                <p>
                  Absolutely no obligation. We want you to experience our studio and make an informed decision about whether it's the right fit for your fitness journey.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2 text-[#1d3557]">How do I schedule my free trial?</h4>
                <p>
                  Simply fill out the form on this page, and one of our team members will contact you to schedule your free trial at a time that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrialPage;
