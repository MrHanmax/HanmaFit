import { Link } from "wouter";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d3557] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-['Bebas_Neue'] tracking-wider mb-4">HANMA FITNESS</h3>
            <p className="mb-4">
              Johar's premium fitness destination providing expert coaching, diverse classes, and a motivating community atmosphere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hanma.pk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFA500] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/923167911505" 
                className="text-white hover:text-[#FFA500] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FFA500] transition-colors duration-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#FFA500] transition-colors duration-300">Services</Link></li>
              <li><Link href="/schedule" className="hover:text-[#FFA500] transition-colors duration-300">Schedule</Link></li>
              <li><Link href="/pricing" className="hover:text-[#FFA500] transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-[#FFA500] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#FFA500] transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFA500] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/personal-training" className="hover:text-[#FFA500] transition-colors duration-300">Personal Training</Link></li>
              <li><Link href="/services/group-classes" className="hover:text-[#FFA500] transition-colors duration-300">Group Classes</Link></li>
              <li><Link href="/services/group-classes" className="hover:text-[#FFA500] transition-colors duration-300">MMA Training</Link></li>
              <li><Link href="/services/group-classes" className="hover:text-[#FFA500] transition-colors duration-300">Strength Training</Link></li>
              <li><Link href="/services/group-classes" className="hover:text-[#FFA500] transition-colors duration-300">Zumba & Aerobics</Link></li>
              <li><Link href="/schedule" className="hover:text-[#FFA500] transition-colors duration-300">Female-Only Sessions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 flex-shrink-0" size={18} />
                <span>Manzoor St, Block 2 Block 1 A Gulistan-e-Johar, Karachi, 35400</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:03167911505" className="hover:text-[#FFA500] transition-colors duration-300">03167911505</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 flex-shrink-0" size={18} />
                <a href="https://wa.me/923167911505" className="hover:text-[#FFA500] transition-colors duration-300">03167911505</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:hanma.pk@gmail.com" className="hover:text-[#FFA500] transition-colors duration-300">hanma.pk@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>Copyright © Hanma Fitness Studio {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
