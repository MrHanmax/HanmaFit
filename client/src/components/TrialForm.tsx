import { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const TrialForm = () => {
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const [classInterest, setClassInterest] = useState<string>("");
  const [howHeard, setHowHeard] = useState<string>("");

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

    // Function to update the message field in the iframe with our extra details
    const updateMessageWithCustomFields = () => {
      const iframeContainer = iframeContainerRef.current;
      if (!iframeContainer) return;
      
      const iframe = iframeContainer.querySelector('iframe');
      if (!iframe) return;
      
      try {
        // For passing data to Brevo form
        const extraData = {
          classInterest: classInterest ? `Class Interest: ${classInterest}` : '',
          howHeard: howHeard ? `How I heard about Hanma: ${howHeard}` : ''
        };
        
        // Combine into a message if we have data
        if (extraData.classInterest || extraData.howHeard) {
          const message = `
${extraData.classInterest}
${extraData.howHeard}
          `.trim();
          
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage({
              type: 'APPEND_MESSAGE',
              message: message
            }, '*');
          }
        }
      } catch (error) {
        console.error("Error updating iframe message:", error);
      }
    };

    // Add listener for form submission attempts
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'FORM_SUBMIT_ATTEMPT') {
        updateMessageWithCustomFields();
      }
    });

    // Initial attempt after load
    const timeoutId = setTimeout(updateMessageWithCustomFields, 2000);
    
    return () => {
      clearTimeout(timeoutId);
      document.head.removeChild(styleSheet);
    };
  }, [classInterest, howHeard]);
  
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
        
        {/* Custom fields that will append to the message */}
        <div className="mb-6 space-y-4">
          <div>
            <label htmlFor="classInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Which class are you interested in?
            </label>
            <Select 
              value={classInterest}
              onValueChange={(value) => setClassInterest(value)}
            >
              <SelectTrigger id="classInterest" className="w-full border-gray-300 focus:border-[#FFA500] focus:ring-[#FFA500]">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MMA Training">MMA Training</SelectItem>
                <SelectItem value="Strength Training">Strength Training</SelectItem>
                <SelectItem value="Zumba/Aerobics">Zumba/Aerobics</SelectItem>
                <SelectItem value="Personal Training">Personal Training</SelectItem>
                <SelectItem value="Not sure yet">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <Select 
              value={howHeard}
              onValueChange={(value) => setHowHeard(value)}
            >
              <SelectTrigger id="howHeard" className="w-full border-gray-300 focus:border-[#FFA500] focus:ring-[#FFA500]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Google Search">Google Search</SelectItem>
                <SelectItem value="Friend/Family">Friend/Family</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="sib-form-container" ref={iframeContainerRef}>
          {/* Brevo embedded form */}
          <iframe 
            width="100%" 
            height="440" 
            src="https://sibforms.com/serve/MUIFAIpZbYtqP5r0rYsjCos7KKNClvmVj8G_rPnhOIUbKRJpobAHjpo5ng2GCQQsiaBcbbZZTGGOoEK1H_UXfBodnkm-36vXUrbKuBxjQOWe-V0SnPMR-ZkEpzSmjiTnkWsYxZOIDPEcdXk4-LFm-Qu4hKOvGC7EtNSP7a5AnCZglCcDF2IClK6dsFG2alDqIycLr3muEvfPtpA0" 
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
          
          {/* Note about how the form works */}
          <div className="mt-3 text-center text-sm text-gray-500">
            <p>Please select your class interest and referral source above. Your selections will be automatically included with your submission.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialForm;
