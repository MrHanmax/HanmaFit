import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Flame, Users } from "lucide-react";
import { useEffect } from "react";

const GroupClassesPage = () => {
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
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Group fitness class" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              DYNAMIC CLASSES, POWERFUL RESULTS: JOIN THE HANMA COMMUNITY!
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Experience the energy and motivation of our group fitness classes led by expert instructors in a supportive community environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schedule">
                <Button size="lg" className="bg-[#FFA500] hover:bg-amber-600 text-white font-semibold text-lg">
                  View Live Class Schedule
                </Button>
              </Link>
              <Link href="/contact#trialform">
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 font-semibold text-lg">
                  Try Your First Class FREE!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl mb-6 text-[#1d3557]">THE POWER OF GROUP FITNESS</h2>
            <p className="text-lg mb-8">
              At Hanma Fitness Studio, our group classes offer the perfect blend of expert instruction, motivating energy, and community support. Whether you're looking to learn martial arts, build strength, or dance your way to fitness, our diverse class offerings have something for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-[#FFA500]/10 rounded-full p-4 mb-4">
                  <Flame className="h-10 w-10 text-[#FFA500]" />
                </div>
                <h3 className="font-semibold text-xl mb-2">High-Energy Atmosphere</h3>
                <p>Feed off the energy of the group and push yourself further than you would alone.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#FFA500]/10 rounded-full p-4 mb-4">
                  <Users className="h-10 w-10 text-[#FFA500]" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Community Support</h3>
                <p>Join a supportive fitness family that celebrates each other's victories and provides motivation.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#FFA500]/10 rounded-full p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Expert Instruction</h3>
                <p>Learn proper form and technique from our certified instructors in a safe environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Class Types */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-3xl mb-10 text-center text-[#1d3557]">EXPLORE OUR CLASS TYPES</h2>
          
          {/* MMA Training */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c3cdd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="MMA training class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="font-bold text-2xl mb-4 text-[#1d3557]">MMA TRAINING</h3>
                <p className="mb-6">
                  Our Mixed Martial Arts classes combine elements of various combat disciplines, teaching you striking, grappling, and self-defense techniques in a controlled, safe environment. Whether you're looking to learn a new skill, improve your fitness, or just try something different, our MMA classes offer an exciting and challenging workout.
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>High intensity</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>All levels welcome</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-lg">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Improve cardiovascular fitness and strength</li>
                    <li>Learn practical self-defense techniques</li>
                    <li>Develop discipline and mental focus</li>
                    <li>Release stress in a controlled environment</li>
                  </ul>
                </div>
                <Link href="/schedule">
                  <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                    View Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Strength Training */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Strength training class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="font-bold text-2xl mb-4 text-[#1d3557]">STRENGTH TRAINING</h3>
                <p className="mb-6">
                  Our strength training classes focus on building muscle, increasing power, and improving overall functional strength. Using a combination of free weights, resistance equipment, and bodyweight exercises, these classes are designed to help you build a stronger, more capable body regardless of your starting point.
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>Moderate-High intensity</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>All levels welcome</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-lg">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Increase muscle mass and strength</li>
                    <li>Boost metabolism and fat burning</li>
                    <li>Improve bone density and joint health</li>
                    <li>Enhance everyday functional movements</li>
                  </ul>
                </div>
                <Link href="/schedule">
                  <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                    View Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Zumba & Aerobics */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Zumba class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="font-bold text-2xl mb-4 text-[#1d3557]">ZUMBA & AEROBICS</h3>
                <p className="mb-6">
                  Dance your way to fitness with our high-energy Zumba and Aerobics classes! These fun, music-driven workouts combine choreographed movements with cardiovascular exercise, making fitness feel more like a party than a workout. Perfect for those who enjoy a social, upbeat approach to exercise.
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>50 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>Moderate intensity</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>All levels welcome</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-lg">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Burn calories while having fun</li>
                    <li>Improve coordination and rhythm</li>
                    <li>Boost mood through music and movement</li>
                    <li>Build cardiovascular endurance</li>
                  </ul>
                </div>
                <Link href="/schedule">
                  <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                    View Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Female-Only Classes */}
          <div className="bg-pink-50 rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1609899464926-c34721ed9b0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Women's fitness class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="font-bold text-2xl mb-4 text-[#1d3557]">FEMALE-ONLY CLASSES</h3>
                <p className="mb-6">
                  We offer dedicated female-only training sessions daily from 1:00 PM to 5:00 PM. These classes provide a comfortable, supportive environment where women can focus on their fitness goals with our expert female trainer, Ayesha. All of our class types are available in female-only formats.
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>Various class lengths</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#FFA500]" />
                    <span>All fitness levels</span>
                  </div>
                </div>
                <div className="p-4 bg-pink-100 rounded-lg mb-6">
                  <h4 className="font-semibold text-lg mb-2">Available Female-Only Classes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Women's MMA</li>
                    <li>Women's Strength Training</li>
                    <li>Women's Zumba & Aerobics</li>
                    <li>Women's Personal Training (by appointment)</li>
                  </ul>
                </div>
                <Link href="/schedule">
                  <Button className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white">
                    View Female-Only Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-8">
            <h3 className="font-bold text-2xl mb-6 text-center text-[#1d3557]">WHAT OUR CLASS MEMBERS SAY</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="Testimonial from Imran" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d3557]">Imran S.</h4>
                    <p className="text-sm text-[#FFA500]">MMA Class Member</p>
                  </div>
                </div>
                <p className="text-sm italic mb-2">
                  "The MMA classes at Hanma are incredible! Ahmed is an expert instructor who makes complex techniques accessible to everyone. The energy in the class is contagious!"
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="Testimonial from Sana" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d3557]">Sana K.</h4>
                    <p className="text-sm text-[#FFA500]">Zumba Class Member</p>
                  </div>
                </div>
                <p className="text-sm italic mb-2">
                  "As a woman, I was hesitant to join a gym, but the female-only Zumba classes at Hanma made all the difference. Ayesha is an amazing instructor who makes every class fun!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-6 text-[#1d3557]">READY TO JOIN THE ENERGY?</h2>
            <p className="text-lg mb-8">
              Experience the power of group fitness at Hanma. Try any class for free and discover the motivation, energy, and results that come from training with our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#trialform">
                <Button 
                  size="lg" 
                  className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium inline-flex items-center"
                >
                  Try Your First Class FREE!
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/schedule">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557]/10"
                >
                  View Class Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupClassesPage;
