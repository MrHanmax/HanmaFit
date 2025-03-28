import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TrialForm = () => {
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // This runs after the component mounts to customize the iframe
  useEffect(() => {
    // Add custom CSS to make the form match our theme
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .sib-form-container iframe .entry__choice {
        color: #1d3557 !important;
      }
      .sib-form-container iframe .entry__button {
        background-color: #FFA500 !important;
        border-color: #FFA500 !important;
      }
      .sib-form-container iframe .entry__button:hover {
        background-color: #e69500 !important;
      }
      .sib-form-container iframe .entry__field {
        border-radius: 0.375rem !important;
      }
      .sib-form-container iframe body {
        font-family: 'Inter', sans-serif !important;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#1d3557] rounded-lg overflow-hidden shadow-xl">
      <div className="lg:w-1/2 p-8 lg:p-12 text-white">
        <h2 className="font-bold text-3xl md:text-4xl mb-6">CLAIM YOUR FREE TRIAL CLASS</h2>
        <p className="text-lg mb-6">
          Experience the Hanma difference with a complimentary trial class. Fill out the form, and our team will contact you to schedule your visit to our Gulistan-e-Johar studio.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <div className="text-[#FFA500] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Try any group class: MMA, Strength, Zumba, or Aerobics</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#FFA500] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Meet our expert coaches and tour the facility</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#FFA500] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Receive a complimentary fitness consultation</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#FFA500] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Female-only hours available</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#FFA500] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No obligation or pressure to join</span>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="tel:03167911505" className="flex items-center text-white hover:text-[#FFA500] transition-colors duration-300">
            <Phone className="mr-2" size={18} />
            <span>03167911505</span>
          </a>
          <a href="https://wa.me/923167911505" className="flex items-center text-white hover:text-[#FFA500] transition-colors duration-300">
            <FaWhatsapp className="mr-2" size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
      
      <div className="lg:w-1/2 p-8 lg:p-12 bg-white w-full">
        <h3 className="font-bold text-2xl mb-6 text-[#1d3557] text-center">BOOK YOUR FREE TRIAL NOW</h3>
        
        <div className="sib-form-container" ref={iframeContainerRef}>
          {/* Brevo embedded form */}
          <iframe 
            width="100%" 
            height="500" 
            src="https://sibforms.com/serve/MUIFAM3URjTiIT0omzCHW8HKzJxsXBP_IS0uGGx5sIlfu8PBLLs0lUJ2q6FnIvaaZJDzcYa4vtGsAT6h5TZl415SwR5bMua6XkJxlZhaDL3jjPUEr1yIbh40ZK5PhtvnO9xsufWKJb-eyMb3XAQTO5goFKlKtiSkOXO3nGs1lMxewI-DNc33SZmHsmrvyi1i2I0dqC-vv110jy6P"
            frameBorder="0" 
            scrolling="auto" 
            allowFullScreen 
            style={{ 
              display: "block", 
              marginLeft: "auto", 
              marginRight: "auto", 
              maxWidth: "100%",
              border: "none"
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;
import { useState } from 'react';
import { toast } from 'sonner';

export default function TrialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    classInterest: '',
    howHeard: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/trial-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success('Trial request submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        classInterest: '',
        howHeard: ''
      });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="classInterest" className="block text-sm font-medium text-gray-700">Class Interest</label>
        <select
          id="classInterest"
          value={formData.classInterest}
          onChange={(e) => setFormData(prev => ({ ...prev, classInterest: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Select a class</option>
          <option value="personal-training">Personal Training</option>
          <option value="group-fitness">Group Fitness</option>
          <option value="mma">MMA</option>
          <option value="yoga">Yoga</option>
        </select>
      </div>

      <div>
        <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
        <select
          id="howHeard"
          value={formData.howHeard}
          onChange={(e) => setFormData(prev => ({ ...prev, howHeard: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        >
          <option value="">Select an option</option>
          <option value="social-media">Social Media</option>
          <option value="friend">Friend/Family</option>
          <option value="search">Search Engine</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {isSubmitting ? 'Submitting...' : 'Start Free Trial'}
      </button>
    </form>
  );
}
