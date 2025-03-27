import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Testimonial, Transformation } from "@/lib/types";

const testimonials: Testimonial[] = [
  {
    id: "imran",
    name: "Imran S.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E0E0E0'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23A0A0A0'/%3E%3Cpath d='M50,75 C35,75 25,65 25,55 L75,55 C75,65 65,75 50,75 Z' fill='%23A0A0A0'/%3E%3C/svg%3E",
    text: "I've been a member at Hanma for 6 months and the results speak for themselves. I've lost 15kg and gained significant muscle. The trainers are knowledgeable and push you just right. The MMA classes are my favorite—intense but incredibly satisfying!",
    goal: "Weight Loss & Strength",
    rating: 5
  },
  {
    id: "sana",
    name: "Sana K.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E0E0E0'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23A0A0A0'/%3E%3Cpath d='M50,75 C35,75 25,65 25,55 L75,55 C75,65 65,75 50,75 Z' fill='%23A0A0A0'/%3E%3C/svg%3E",
    text: "As a woman, I was hesitant to join a gym, but the female-only hours at Hanma made all the difference. Ayesha is an amazing trainer who understands exactly what I need. The Zumba classes are so fun I don't even realize I'm working out!",
    goal: "Fitness & Confidence",
    rating: 5
  },
  {
    id: "faisal",
    name: "Faisal R.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E0E0E0'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23A0A0A0'/%3E%3Cpath d='M50,75 C35,75 25,65 25,55 L75,55 C75,65 65,75 50,75 Z' fill='%23A0A0A0'/%3E%3C/svg%3E",
    text: "The personal training at Hanma is worth every rupee. Omar designed a program specifically for my goals, and I've seen more progress in 3 months than I did in years at other gyms. The community aspect keeps me accountable—I never want to miss a session!",
    goal: "Muscle Building",
    rating: 5
  },
  {
    id: "zara",
    name: "Zara M.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E0E0E0'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23A0A0A0'/%3E%3Cpath d='M50,75 C35,75 25,65 25,55 L75,55 C75,65 65,75 50,75 Z' fill='%23A0A0A0'/%3E%3C/svg%3E",
    text: "I joined Hanma after having my second child and was worried about getting back in shape. The supportive environment and expert guidance from the trainers have been incredible. In just 4 months, I've lost 12kg and feel stronger than ever!",
    goal: "Post-Pregnancy Fitness",
    rating: 5
  },
  {
    id: "ali",
    name: "Ali H.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E0E0E0'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23A0A0A0'/%3E%3Cpath d='M50,75 C35,75 25,65 25,55 L75,55 C75,65 65,75 50,75 Z' fill='%23A0A0A0'/%3E%3C/svg%3E",
    text: "I've tried multiple gyms in Johar, but none compare to Hanma. The quality of coaching and the community feeling is unmatched. The MMA classes have improved not just my fitness but also my discipline and focus in everyday life.",
    goal: "Overall Fitness & MMA Skills",
    rating: 5
  },
  {
    id: "hina",
    name: "Hina J.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E0E0E0'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23A0A0A0'/%3E%3Cpath d='M50,75 C35,75 25,65 25,55 L75,55 C75,65 65,75 50,75 Z' fill='%23A0A0A0'/%3E%3C/svg%3E",
    text: "The female-only hours were what initially drew me to Hanma, but the quality of training is what keeps me coming back. I've not only lost weight but also gained confidence and strength. The women's community here is so supportive!",
    goal: "Weight Loss & Toning",
    rating: 5
  }
];

const transformations: Transformation[] = [
  {
    id: "adeel",
    name: "Adeel's 12-Week Transformation",
    description: "Lost 18kg and gained significant muscle definition through Personal Training and MMA classes.",
    beforeImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23E0E0E0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EBEFORE%3C/text%3E%3C/svg%3E",
    afterImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23C0C0C0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23444444'%3EAFTER%3C/text%3E%3C/svg%3E"
  },
  {
    id: "zara",
    name: "Zara's Fitness Journey",
    description: "Transformed her body and gained confidence through our women's classes and strength training.",
    beforeImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23E0E0E0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EBEFORE%3C/text%3E%3C/svg%3E",
    afterImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23C0C0C0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23444444'%3EAFTER%3C/text%3E%3C/svg%3E"
  },
  {
    id: "hamza",
    name: "Hamza's Strength Journey",
    description: "Gained 10kg of muscle and improved overall strength in 6 months with our personalized training program.",
    beforeImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23E0E0E0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EBEFORE%3C/text%3E%3C/svg%3E",
    afterImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23C0C0C0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23444444'%3EAFTER%3C/text%3E%3C/svg%3E"
  },
  {
    id: "sara",
    name: "Sara's Weight Loss Success",
    description: "Lost 22kg in 8 months through a combination of nutrition guidance and our fitness classes.",
    beforeImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23E0E0E0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EBEFORE%3C/text%3E%3C/svg%3E",
    afterImage: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23C0C0C0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23444444'%3EAFTER%3C/text%3E%3C/svg%3E"
  }
];

const TestimonialsPage = () => {
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
          <div className="bg-gray-800 w-full h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              REAL PEOPLE, REAL RESULTS
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Hear from our members who have transformed their lives at Hanma Fitness Studio in Gulistan-e-Johar.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">WHAT OUR MEMBERS SAY</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our members have to say about their experience at Hanma Fitness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={`Testimonial from ${testimonial.name}`} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1d3557]">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-[#FFA500] font-semibold">Goal: {testimonial.goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Transformations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">TRANSFORMATION STORIES</h2>
            <p className="text-lg max-w-2xl mx-auto">
              See the incredible transformations our members have achieved with dedication and the support of our expert coaching team.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {transformations.map((transformation) => (
                  <div key={transformation.id}>
                    <div className="flex space-x-4 mb-4">
                      <div className="w-1/2">
                        <div className="relative">
                          <img 
                            src={transformation.beforeImage} 
                            alt={`Before ${transformation.name}`} 
                            className="w-full h-64 object-cover rounded"
                          />
                          <div className="absolute top-0 left-0 bg-[#1d3557] text-white px-3 py-1 text-sm font-bold">
                            BEFORE
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="relative">
                          <img 
                            src={transformation.afterImage} 
                            alt={`After ${transformation.name}`} 
                            className="w-full h-64 object-cover rounded"
                          />
                          <div className="absolute top-0 left-0 bg-[#FFA500] text-white px-3 py-1 text-sm font-bold">
                            AFTER
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{transformation.name}</h3>
                    <p className="text-gray-600">
                      {transformation.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video Testimonials */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="font-bold text-2xl mb-6 text-center text-[#1d3557]">MEMBER SUCCESS STORIES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-[#1d3557]">Maria's Weight Loss Journey</h4>
                <p className="mb-4">
                  "When I joined Hanma, I was struggling with my weight and confidence. The trainers created a personalized plan that included strength training and nutrition guidance. Six months later, I'm down 20kg and feel amazing!"
                </p>
                <div className="flex items-center text-sm text-[#FFA500] font-medium">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500] mr-1"></span>
                  <span>Lost 20kg in 6 months</span>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-[#1d3557]">Kamran's Strength Transformation</h4>
                <p className="mb-4">
                  "I was the typical 'skinny guy' who couldn't put on muscle despite trying various workout routines. The strength coaches at Hanma designed a program specific to my body type and goals. Now I've gained 12kg of muscle in 8 months!"
                </p>
                <div className="flex items-center text-sm text-[#FFA500] font-medium">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500] mr-1"></span>
                  <span>Gained 12kg of muscle in 8 months</span>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-[#1d3557]">Nadia's Fitness After Pregnancy</h4>
                <p className="mb-4">
                  "After having my second child, I struggled to find time and energy for fitness. The female-only sessions at Hanma provided the perfect environment for me to rebuild my strength and fitness. The trainers understood my needs as a new mom."
                </p>
                <div className="flex items-center text-sm text-[#FFA500] font-medium">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500] mr-1"></span>
                  <span>Regained pre-pregnancy fitness in 5 months</span>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-[#1d3557]">Bilal's MMA Progress</h4>
                <p className="mb-4">
                  "I joined Hanma with zero martial arts experience but a strong interest in MMA. The coaches patiently taught me the fundamentals and progressed me at the right pace. Now I'm competing in amateur tournaments and loving every minute!"
                </p>
                <div className="flex items-center text-sm text-[#FFA500] font-medium">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500] mr-1"></span>
                  <span>From beginner to amateur competitor in 1 year</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h3 className="font-bold text-2xl mb-6 text-[#1d3557]">READY TO WRITE YOUR SUCCESS STORY?</h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join our community of success stories at Hanma Fitness Studio. Our expert coaches are ready to help you achieve your fitness goals, whatever they may be.
            </p>
            <Link href="/trial">
              <Button 
                size="lg" 
                className="bg-[#FFA500] hover:bg-amber-600 text-white font-medium inline-flex items-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
