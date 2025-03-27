import { FC } from "react";

const IntroSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mb-6">
            Welcome to <span className="text-primary">Hanma Fitness</span>
          </h2>
          <p className="text-lg mb-8">
            At Hanma Fitness Studio in Gulistan-e-Johar, we focus on quality coaching, personalized attention, and building a supportive community. Our premium facility offers both Co-ed and Female-Only training sessions to accommodate all our members' needs.
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-['Bebas_Neue'] text-2xl text-primary mb-3">OPERATING HOURS</h3>
            <p className="font-medium">Monday - Saturday</p>
            <ul className="mb-2 space-y-1">
              <li>7:00 AM - 10:00 AM (Co-Ed Training)</li>
              <li>1:00 PM - 5:00 PM (Female Only Hours)</li>
              <li>5:00 PM - 12:00 AM (Co-Ed Training)</li>
            </ul>
            <p className="font-medium">Sunday: Closed</p>
            <a href="#contact" className="text-primary hover:underline inline-block mt-2">
              Contact us for details →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
