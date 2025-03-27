import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="People working out in a fitness studio" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <span className="text-[#e63946]">UNLEASH YOUR STRENGTH:</span> <br />
            HANMA FITNESS
          </h1>
          <h2 className="text-xl md:text-2xl mb-8">Johar's Premium Training Studio</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Expert Personal Training, Unique Group Classes (MMA, Strength, Zumba) & A Community That Delivers Results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/trial">
              <Button size="lg" className="bg-[#e63946] hover:bg-red-700 text-white font-semibold text-lg">
                Book Your Free Trial Class
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-white text-[#1d3557] hover:bg-gray-200 font-semibold text-lg">
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating info card */}
      <div className="hidden lg:block absolute right-12 bottom-12 bg-white/95 text-[#1d3557] p-6 rounded-lg shadow-lg max-w-xs">
        <h3 className="font-bold text-lg mb-2">Operating Hours</h3>
        <p className="mb-1"><span className="font-medium">Mon-Sat:</span> 7AM-12AM</p>
        <p className="mb-3"><span className="text-[#e63946] font-medium">Female-only hours:</span> 1PM-5PM</p>
        <Link href="/contact" className="text-[#e63946] hover:underline font-medium">
          View full schedule →
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
