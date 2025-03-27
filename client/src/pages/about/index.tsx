import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trainer } from "@/lib/types";

const trainers: Trainer[] = [
  {
    id: "ahmed-khan",
    name: "AHMED KHAN",
    title: "Head Coach / MMA Specialist",
    bio: "With over 10 years of experience in martial arts and strength training, Ahmed leads our coaching team with passion and expertise. Certified in MMA training and functional fitness, he specializes in helping members achieve breakthrough results.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "omar-raza",
    name: "OMAR RAZA",
    title: "Strength & Conditioning Coach",
    bio: "Omar brings scientific precision to strength training at Hanma. With his background in exercise physiology and multiple certifications in strength coaching, he designs programs that deliver measurable improvements in strength and performance.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ayesha-malik",
    name: "AYESHA MALIK",
    title: "Female Training Coach / Zumba Specialist",
    bio: "Ayesha leads our women-only sessions with energy and expertise. A certified Zumba instructor and personal trainer, she creates a comfortable and empowering environment for women to achieve their fitness goals through vibrant workouts.",
    image: "https://images.unsplash.com/photo-1609899464926-c34721ed9b0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "saad-ahmed",
    name: "SAAD AHMED",
    title: "Aerobics Instructor / Personal Trainer",
    bio: "Saad's infectious energy makes his classes both challenging and fun. With expertise in group fitness and personal training, he specializes in helping members improve their cardiovascular health and overall fitness through dynamic workouts.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const AboutPage = () => {
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
            src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Fitness studio interior" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              MEET THE TEAM & DISCOVER THE HANMA DIFFERENCE
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Get to know the passionate professionals dedicated to your fitness success at Hanma Fitness Studio in Gulistan-e-Johar.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="font-bold text-3xl mb-6 text-[#1d3557]">OUR STORY</h2>
                <p className="mb-4">
                  Founded with a passion for transforming lives through fitness, Hanma Fitness Studio was established to bring premium quality training to the Gulistan-e-Johar community. We recognized that the area needed more than just a gym—it needed a comprehensive fitness solution with expert coaching, diverse training options, and a supportive environment.
                </p>
                <p className="mb-4">
                  Our mission is to empower individuals to achieve their physical best through expert guidance, customized programming, and a motivating community atmosphere. We believe in making quality fitness accessible to everyone in Johar, regardless of their starting point.
                </p>
                <p>
                  Today, we pride ourselves on our diverse class offerings, our expert training team, and most importantly, the supportive community we've built. At Hanma, you're not just a member—you're part of our fitness family.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Fitness community" 
                    className="rounded-lg h-56 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Fitness studio interior" 
                    className="rounded-lg h-56 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Group fitness class" 
                    className="rounded-lg h-56 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Personal training" 
                    className="rounded-lg h-56 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-bold text-3xl mb-8 text-center text-[#1d3557]">OUR VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#e63946]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#1d3557] text-center">Excellence</h3>
                <p className="text-center">
                  We are committed to providing the highest quality fitness experience through expert coaching, premium facilities, and evidence-based training methods.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#e63946]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#1d3557] text-center">Community</h3>
                <p className="text-center">
                  We foster a supportive, inclusive environment where members motivate each other, build connections, and celebrate each other's successes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#e63946]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#1d3557] text-center">Results</h3>
                <p className="text-center">
                  We are dedicated to helping our members achieve measurable, sustainable results through personalized attention, accountability, and progressive programming.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Team */}
          <div>
            <h2 className="font-bold text-3xl mb-8 text-center text-[#1d3557]">MEET OUR EXPERT COACHES</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainers.map((trainer) => (
                <div key={trainer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1 text-[#1d3557]">{trainer.name}</h3>
                    <p className="text-[#e63946] font-semibold mb-4">{trainer.title}</p>
                    <p className="text-gray-600">
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Facility */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">OUR FACILITY</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Located in the heart of Gulistan-e-Johar, our studio is designed to provide a premium fitness experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Group training area" 
                className="rounded-lg h-64 w-full object-cover mb-4"
              />
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Group Training Area</h3>
              <p>
                Spacious studio space equipped for various class types, from high-energy MMA to dynamic Zumba sessions.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Strength training zone" 
                className="rounded-lg h-64 w-full object-cover mb-4"
              />
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Strength Training Zone</h3>
              <p>
                Premium strength equipment including free weights, machines, and functional training apparatus.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Community space" 
                className="rounded-lg h-64 w-full object-cover mb-4"
              />
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Community Space</h3>
              <p>
                Dedicated area for members to connect, recover, and refuel before and after workouts.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="font-bold text-xl mb-4 text-[#1d3557]">FACILITY FEATURES</h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium equipment</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Clean, sanitized environment</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Changing facilities</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Air conditioning</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Drinking water</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure lockers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">COME EXPERIENCE THE HANMA DIFFERENCE</h2>
            <p className="text-lg mb-6">
              Join our community and see why Hanma Fitness Studio is the premier fitness destination in Gulistan-e-Johar. 
              Your first class is on us!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/trial">
                <Button 
                  size="lg"
                  className="bg-[#e63946] hover:bg-red-700 text-white font-medium"
                >
                  Book Your Free Trial Class
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557]/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
