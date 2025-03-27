import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D3557] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="font-['Bebas_Neue'] text-primary text-3xl">HANMA</span>{" "}
              <span>FITNESS</span>
            </div>
            <p className="opacity-80 mb-4">
              Johar's premier fitness destination offering expert coaching, unique classes, and measurable results.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hanma.pk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a 
                href="https://wa.me/923167911505" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary transition"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="opacity-80 hover:opacity-100 hover:text-primary transition">Home</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-primary transition">Services</a></li>
              <li><a href="#pricing" className="opacity-80 hover:opacity-100 hover:text-primary transition">Pricing</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-primary transition">About Us</a></li>
              <li><a href="#testimonials" className="opacity-80 hover:opacity-100 hover:text-primary transition">Testimonials</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#personal-training" className="opacity-80 hover:opacity-100 hover:text-primary transition">Personal Training</a></li>
              <li><a href="#group-classes" className="opacity-80 hover:opacity-100 hover:text-primary transition">MMA Classes</a></li>
              <li><a href="#group-classes" className="opacity-80 hover:opacity-100 hover:text-primary transition">Strength Training</a></li>
              <li><a href="#group-classes" className="opacity-80 hover:opacity-100 hover:text-primary transition">Zumba & Aerobics</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition">Female Only Sessions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span>Manzoor St, Block 2 Block 1 A Gulistan-e-Johar, Karachi, 35400</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-primary"></i>
                <a href="tel:03167911505">03167911505</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-primary"></i>
                <a href="mailto:hanma.pk@gmail.com">hanma.pk@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center opacity-80 text-sm">
          <p>Copyright © Hanma Fitness Studio {currentYear}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
