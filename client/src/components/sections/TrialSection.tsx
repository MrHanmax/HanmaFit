import { FC, FormEvent, useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const TrialSection: FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    goals: ""
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
      await apiRequest("POST", "/api/trial", formData);
      toast({
        title: "Trial Booked!",
        description: "Thank you for booking your free trial. Our team will contact you shortly to confirm your slot.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        class: "",
        goals: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem booking your trial. Please try again.",
        variant: "destructive",
      });
      console.error("Trial booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="trial" className="py-16 bg-[#FFD166] bg-opacity-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-['Bebas_Neue'] text-xl text-primary">START TODAY</span>
            <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2">
              Book Your FREE Trial Class
            </h2>
            <p className="mt-4 opacity-80">
              Experience the Hanma difference with no obligations.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="trial-name" className="block font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="trial-name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="trial-phone" className="block font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="trial-phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="trial-email" className="block font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                id="trial-email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="trial-class" className="block font-medium mb-1">Class Interested In</label>
              <select 
                id="trial-class" 
                name="class" 
                value={formData.class}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>Select a class</option>
                <option value="mma">MMA Training</option>
                <option value="strength">Strength Training</option>
                <option value="zumba">Zumba/Aerobics</option>
                <option value="pt">Personal Training</option>
                <option value="female-only">Female Only Session</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="trial-goals" className="block font-medium mb-1">Your Fitness Goals (Optional)</label>
              <textarea 
                id="trial-goals" 
                name="goals" 
                rows={3} 
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            
            <div className="mt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold py-4 rounded-md transition text-lg disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Claim My FREE Class!"}
              </button>
            </div>
            
            <p className="text-sm text-center mt-4">
              By submitting this form, you'll receive a confirmation call from our team to schedule your free trial class.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
