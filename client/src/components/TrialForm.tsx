import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TrialForm = () => {
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // This runs after the component mounts to inject custom fields for class interest and referral
  useEffect(() => {
    // Give Brevo form time to load
    const timeoutId = setTimeout(() => {
      const iframeContainer = iframeContainerRef.current;
      if (!iframeContainer) return;
      
      const iframe = iframeContainer.querySelector('iframe');
      if (!iframe) return;
      
      // Attempt to access and modify the iframe content
      try {
        const iframeWindow = iframe.contentWindow;
        if (!iframeWindow) return;
        
        // Message to communicate with the iframe
        iframeWindow.postMessage({
          type: 'CUSTOMIZE_FORM',
          data: {
            // Details for form customization if possible
            addClassInterest: true,
            addHowHeard: true
          }
        }, '*');
      } catch (error) {
        console.error("Could not customize the Brevo form", error);
      }
    }, 1500);
    
    return () => clearTimeout(timeoutId);
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
        
        <div ref={iframeContainerRef} className="w-full flex justify-center">
          {/* Brevo embedded form */}
          <iframe 
            width="100%" 
            height="550" 
            src="https://sibforms.com/serve/MUIFAIpZbYtqP5r0rYsjCos7KKNClvmVj8G_rPnhOIUbKRJpobAHjpo5ng2GCQQsiaBcbbZZTGGOoEK1H_UXfBodnkm-36vXUrbKuBxjQOWe-V0SnPMR-ZkEpzSmjiTnkWsYxZOIDPEcdXk4-LFm-Qu4hKOvGC7EtNSP7a5AnCZglCcDF2IClK6dsFG2alDqIycLr3muEvfPtpA0" 
            frameBorder="0" 
            scrolling="auto" 
            allowFullScreen 
            style={{ 
              display: "block", 
              marginLeft: "auto", 
              marginRight: "auto", 
              maxWidth: "100%" 
            }}
          ></iframe>
          
          {/* Note about additional options */}
          <div className="mt-3 text-center text-sm text-gray-500">
            <p>Please let us know in the message field which class you're interested in and how you heard about us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;
