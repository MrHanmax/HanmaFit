import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
  {
    id: "group-class",
    title: "GROUP CLASS ACCESS",
    price: 8000,
    currency: "₨",
    period: "month",
    features: [
      "Unlimited access to all group classes",
      "MMA, Strength, Zumba & Aerobics included",
      "Access to female-only sessions",
      "Community events and challenges"
    ],
    bgColor: "bg-[#457b9d]",
    buttonColor: "bg-[#457b9d] hover:bg-[#457b9d]/90"
  },
  {
    id: "unlimited",
    title: "UNLIMITED ACCESS",
    price: 12000,
    currency: "₨",
    period: "month",
    features: [
      "All benefits of Group Class Access",
      "Open gym access during all operating hours",
      "2 Personal Training sessions per month",
      "Monthly fitness assessment",
      "Priority booking for special events"
    ],
    isPopular: true,
    bgColor: "bg-[#FFA500]",
    buttonColor: "bg-[#FFA500] hover:bg-amber-600"
  },
  {
    id: "pt-package",
    title: "PT PACKAGES",
    price: 15000,
    currency: "₨",
    period: "month",
    features: [
      "8 Personal Training sessions per month",
      "Customized workout program",
      "Nutritional guidance",
      "Bi-weekly progress assessments",
      "4 Group Classes per month included"
    ],
    bgColor: "bg-[#1d3557]",
    buttonColor: "bg-[#1d3557] hover:bg-[#1d3557]/90"
  }
];

const PricingPage = () => {
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
              INVEST IN QUALITY
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Choose the membership that fits your fitness journey and goals. 
              At Hanma Fitness, we offer premium training experiences at competitive prices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">MEMBERSHIP OPTIONS</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Choose the best plan for your fitness goals and lifestyle. All memberships include access to our premium facilities in Gulistan-e-Johar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
                  plan.isPopular ? '-mt-4 md:mt-0 border-2 border-[#FFA500] relative z-10' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#FFA500] text-white px-4 py-1 text-sm font-bold uppercase">
                    Most Popular
                  </div>
                )}
                <div className={`${plan.bgColor} text-white p-6 text-center`}>
                  <h3 className="font-bold text-2xl">{plan.title}</h3>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-[#1d3557]">{plan.currency} {plan.price.toLocaleString()}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/trial">
                    <Button className={`w-full ${plan.buttonColor} text-white font-medium`}>
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Free Trial Offer */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="font-bold text-2xl mb-4 text-[#1d3557]">FREE TRIAL WEEK FOR NEW MEMBERS</h3>
                <p className="text-lg mb-4">
                  Experience the Hanma difference with a free week trial. Try our group classes, meet our expert trainers, and see why we're Johar's premium fitness destination.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="text-[#FFA500] mr-1" size={16} />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-[#FFA500] mr-1" size={16} />
                    <span>All classes included</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-[#FFA500] mr-1" size={16} />
                    <span>Free consultation</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <Link href="/trial">
                  <Button size="lg" className="w-full bg-[#FFA500] hover:bg-amber-600 text-white font-medium text-lg">
                    Claim Your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">ADDITIONAL OPTIONS</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Customize your fitness experience with these additional services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-[#1d3557]">PERSONAL TRAINING SESSION PACKS</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between pb-2 border-b">
                  <span>Single Session</span>
                  <span className="font-semibold">₨ 2,500</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Pack of 5 Sessions</span>
                  <span className="font-semibold">₨ 11,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Pack of 10 Sessions</span>
                  <span className="font-semibold">₨ 20,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Couple Training (per session)</span>
                  <span className="font-semibold">₨ 4,000</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                All personal training sessions are 60 minutes and include customized workout programming.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-[#1d3557]">SPECIALIZED SERVICES</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between pb-2 border-b">
                  <span>Fitness Assessment</span>
                  <span className="font-semibold">₨ 1,500</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Nutrition Consultation</span>
                  <span className="font-semibold">₨ 2,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Physiotherapy Session</span>
                  <span className="font-semibold">₨ 2,500</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Private Group Class (up to 5 people)</span>
                  <span className="font-semibold">₨ 8,000</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Specialized services can be added to any membership or purchased separately.
              </p>
            </div>
          </div>
          
          {/* Membership Details */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl mb-6 text-center text-[#1d3557]">MEMBERSHIP DETAILS</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#1d3557]">Registration Fee</h4>
                <p>A one-time registration fee of ₨ 2,000 applies to all new memberships.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#1d3557]">Membership Duration</h4>
                <p>Memberships are available in 1-month, 3-month, and 6-month packages. Longer commitments receive discounted rates.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#1d3557]">Payment Options</h4>
                <p>We accept cash, credit/debit cards, and bank transfers. Monthly memberships require an automatic payment setup.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#1d3557]">Cancellation Policy</h4>
                <p>Monthly memberships require a 15-day notice for cancellation. Long-term commitments (3+ months) have specific terms outlined in the membership agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-bold text-2xl mb-4 text-[#1d3557]">QUESTIONS ABOUT OUR PRICING?</h2>
            <p className="text-lg mb-6">
              Our team is ready to help you choose the right membership for your fitness goals. 
              Contact us for more information or to discuss custom options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-[#1d3557] hover:bg-[#1d3557]/90 text-white font-medium"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/trial">
                <Button 
                  className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
