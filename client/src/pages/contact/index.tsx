import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
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
              VISIT OR CONTACT US
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              We'd love to hear from you! Get in touch with Hanma Fitness Studio in Gulistan-e-Johar.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">GET IN TOUCH</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Whether you have questions about our programs, want to schedule a visit, or are ready to start your fitness journey, our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="h-64 relative overflow-hidden">
                  {/* Google Map Embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0550639503284!2d67.11054387451794!3d24.92756977673431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf46f95525%3A0x91f23f2a26998279!2sHanma%20Fitness%20Studio!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hanma Fitness Studio Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-bold text-2xl mb-6 text-[#1d3557]">CONTACT INFORMATION</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p>Manzoor St, Block 2 Block 1 A Gulistan-e-Johar, Karachi, 35400</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p><a href="tel:03167911505" className="hover:text-[#FFA500] transition-colors duration-300">03167911505</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                      <p><a href="https://wa.me/923167911505" className="hover:text-[#FFA500] transition-colors duration-300">03167911505</a></p>
                      <p className="text-sm text-gray-600">Replies during business hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p><a href="mailto:hanma.pk@gmail.com" className="hover:text-[#FFA500] transition-colors duration-300">hanma.pk@gmail.com</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FFA500] text-white rounded-full h-10 w-10 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <Instagram />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                      <p><a href="https://www.instagram.com/hanma.pk/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors duration-300">@hanma.pk</a></p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Operating Hours</h4>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-medium">Monday - Saturday</td>
                        <td className="py-2">
                          <div>7:00 AM - 10:00 AM (Co-Ed Training)</div>
                          <div>1:00 PM - 5:00 PM (Female Only Hours)</div>
                          <div>5:00 PM - 12:00 AM (Co-Ed Training)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium">Sunday</td>
                        <td className="py-2">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-bold text-2xl mb-6 text-[#1d3557]">SEND US A MESSAGE</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-[#1d3557]">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some of the most common questions we receive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">How do I sign up for a membership?</h3>
              <p>
                You can sign up for a membership by visiting our studio during operating hours, contacting us via phone/WhatsApp, or filling out the contact form on this page. One of our team members will guide you through the process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Do you offer free trial classes?</h3>
              <p>
                Yes! We offer a free trial class to new members. You can book your free trial by clicking on the "Free Trial" button in the navigation menu or by visiting our trial page.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">What should I bring to my first class?</h3>
              <p>
                For your first class, please bring comfortable workout clothes, a water bottle, a small towel, and your enthusiasm! Changing rooms are available at the studio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">What are the female-only hours?</h3>
              <p>
                We offer female-only training sessions from 1:00 PM to 5:00 PM, Monday through Saturday. These sessions are led by our female trainer, Ayesha, and provide a comfortable environment for women to focus on their fitness goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Can I cancel or freeze my membership?</h3>
              <p>
                Yes, monthly memberships require a 15-day notice for cancellation. For freezing memberships (temporary suspension), please contact our staff directly to discuss your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2 text-[#1d3557]">Do you offer parking facilities?</h3>
              <p>
                Yes, there is parking available near our studio. Please ask our staff for specific directions and recommendations upon your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#1d3557] rounded-lg shadow-lg p-8 text-white max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="font-bold text-2xl mb-4">READY TO EXPERIENCE THE HANMA DIFFERENCE?</h3>
                <p className="text-lg">
                  Start your fitness journey with us today. Book a free trial class and see why Hanma Fitness Studio is the premier fitness destination in Gulistan-e-Johar.
                </p>
              </div>
              <div className="md:w-1/3">
                <Link href="/trial">
                  <Button 
                    size="lg" 
                    className="w-full bg-[#FFA500] hover:bg-amber-600 text-white font-medium"
                  >
                    Book Free Trial Class
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

export default ContactPage;
