import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trainer } from "@/lib/types";

const trainers: Trainer[] = [
  {
    id: "fawad-haris",
    name: "FAWAD HARIS",
    title: "CEO and Head Coach",
    bio: "Holding a BS in Human Nutrition and Dietetics, Fawad is a polyathlete who leads our coaching team with expertise and passion. His comprehensive knowledge in nutrition and fitness helps our members achieve their health and wellness goals effectively.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "muhammad-hamza",
    name: "MUHAMMAD HAMZA",
    title: "Cross-fit Expert / Senior Coach",
    bio: "Muhammad specializes in cross-fit training and personal training. His dynamic approach to fitness challenges clients to push their boundaries and achieve exceptional results through intensive, diverse workout routines.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "khubaib",
    name: "KHUBAIB",
    title: "Floor Manager / Group Training Coach",
    bio: "As our dedicated Floor Manager, Khubaib ensures that every training session runs smoothly. His expertise in group training creates an energetic and motivating environment that pushes members to achieve their fitness potential.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "faisal",
    name: "FAISAL",
    title: "Morning Trainer / PT & GX Specialist",
    bio: "Faisal's expertise in personal training and group exercises makes him a versatile coach. His morning sessions are energetic and effective, providing members with the perfect start to their day through carefully designed workout routines.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "owais-khan",
    name: "OWAIS KHAN",
    title: "MMA Coach",
    bio: "Sir Owais brings expertise and discipline to our MMA training program. His extensive knowledge of mixed martial arts techniques and training methodologies helps members develop both physical strength and mental focus.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "samina-faisal",
    name: "SAMINA FAISAL",
    title: "Female Trainer / Group Instructor",
    bio: "Samina leads our women-only sessions with expertise and enthusiasm. As a dedicated group instructor, she creates a comfortable and empowering environment for women to achieve their fitness goals through effective and enjoyable workouts.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "ismail-soomro",
    name: "DR. ISMAIL SOOMRO",
    title: "Physiotherapist",
    bio: "Dr. Ismail provides expert physiotherapy services to our members. His medical expertise ensures proper rehabilitation and injury prevention, helping our members maintain optimal physical health while pursuing their fitness goals.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
  },
  {
    id: "muhammad-umar",
    name: "MUHAMMAD UMAR",
    title: "PT and Science-Based Coach",
    bio: "Muhammad Umar brings a scientific approach to personal training. His evidence-based coaching methods and attention to detail ensure that members receive effective, safe, and progressive training programs tailored to their individual needs.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23CCCCCC'/%3E%3Ccircle cx='100' cy='70' r='40' fill='%23666666'/%3E%3Cpath d='M160,200 C160,160 140,130 100,130 C60,130 40,160 40,200 Z' fill='%23666666'/%3E%3C/svg%3E"
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
          <img src="/images/hanma/gym-3.jpg" alt="Hanma Fitness Gym Interior" className="w-full h-full object-cover" />
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
                  <div className="rounded-lg h-56 overflow-hidden">
                    <img src="/images/hanma/gym-1.jpg" alt="Training Area" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg h-56 overflow-hidden">
                    <img src="/images/hanma/gym-2.jpg" alt="Equipment" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg h-56 overflow-hidden">
                    <img src="/images/hanma/gym-3.jpg" alt="Power Rack" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-lg h-56 overflow-hidden bg-gray-800 flex items-center justify-center">
                    <img src="/images/hanma/logo.png" alt="Hanma Logo" className="h-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-bold text-3xl mb-8 text-center text-[#1d3557]">OUR VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFA500]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#1d3557] text-center">Excellence</h3>
                <p className="text-center">
                  We are committed to providing the highest quality fitness experience through expert coaching, premium facilities, and evidence-based training methods.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFA500]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#1d3557] text-center">Community</h3>
                <p className="text-center">
                  We foster a supportive, inclusive environment where members motivate each other, build connections, and celebrate each other's successes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-[#FFA500]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <p className="text-[#FFA500] font-semibold mb-4">{trainer.title}</p>
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
              <div className="rounded-lg h-64 w-full overflow-hidden mb-4">
                <img src="/images/hanma/gym-1.jpg" alt="Training Area" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Premium Training Area</h3>
              <p>
                Our modern training area features quality equipment and atmospheric lighting, designed to create the perfect environment for effective workouts.
              </p>
            </div>
            
            <div>
              <div className="rounded-lg h-64 w-full overflow-hidden mb-4">
                <img src="/images/hanma/gym-2.jpg" alt="MMA Zone" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Strength and MMA Zone</h3>
              <p>
                Our dedicated strength and MMA zones feature specialized equipment for building power, endurance, and martial arts skills under expert supervision.
              </p>
            </div>
            
            <div>
              <div className="rounded-lg h-64 w-full overflow-hidden mb-4">
                <img src="/images/hanma/gym-3.jpg" alt="Strength Zone" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Strength Training Zone</h3>
              <p>
                Our strength zone includes power racks, free weights, and specialized equipment to help you build muscle, increase strength, and improve overall fitness.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="font-bold text-xl mb-4 text-[#1d3557]">FACILITY FEATURES</h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium equipment</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Clean, sanitized environment</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Changing facilities</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Air conditioning</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Drinking water</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium"
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
