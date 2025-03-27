import { FC, FormEvent, useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const ContactSection: FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll be in touch soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#1D3557] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-['Bebas_Neue'] text-xl text-[#FFD166]">GET IN TOUCH</span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold mt-2">
            Visit or Contact Hanma Fitness
          </h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-90">
            Drop by our studio in Gulistan-e-Johar or reach out to us for more information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white text-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 w-8">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-['Montserrat'] font-bold">Address</h4>
                    <p>Manzoor St, Block 2 Block 1 A Gulistan-e-Johar, Karachi, 35400</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 w-8">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-['Montserrat'] font-bold">Phone</h4>
                    <p><a href="tel:03167911505" className="hover:text-primary">03167911505</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 w-8">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-['Montserrat'] font-bold">WhatsApp</h4>
                    <p><a href="https://wa.me/923167911505" target="_blank" rel="noopener noreferrer" className="hover:text-primary">03167911505</a></p>
                    <p className="text-sm">(Replies during business hours)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 w-8">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-['Montserrat'] font-bold">Email</h4>
                    <p><a href="mailto:hanma.pk@gmail.com" className="hover:text-primary">hanma.pk@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 w-8">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-['Montserrat'] font-bold">Operating Hours</h4>
                    <p className="font-medium">Monday - Saturday:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li>7:00 AM - 10:00 AM (Co-Ed Training)</li>
                      <li>1:00 PM - 5:00 PM (Female Only Hours)</li>
                      <li>5:00 PM - 12:00 AM (Co-Ed Training)</li>
                    </ul>
                    <p className="mt-1">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 w-8">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-['Montserrat'] font-bold">Instagram</h4>
                    <p><a href="https://www.instagram.com/hanma.pk/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@hanma.pk</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white text-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block font-medium mb-1">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="mma-classes">MMA Classes</option>
                    <option value="strength-training">Strength Training</option>
                    <option value="zumba-aerobics">Zumba/Aerobics</option>
                    <option value="female-only">Female Only Sessions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold py-3 rounded-md transition disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-4 text-center">Our Location</h3>
          <div className="h-96 w-full bg-gray-200 rounded">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5519325635147!2d67.11045717599657!3d24.882882644744896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f16af9bed07%3A0x33a0f41a28bfa263!2sGulistan-e-Johar%20Block%201%2C%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1688156856035!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hanma Fitness Studio Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
