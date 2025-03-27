import { FC } from "react";

const GroupClassesSection: FC = () => {
  return (
    <section id="group-classes" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-['Bebas_Neue'] text-xl text-primary">GROUP TRAINING</span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-bold text-[#1D3557] mt-2">
            Dynamic Classes, Powerful Results
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Join the Hanma community in our energizing group classes designed for all fitness levels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* MMA Class Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555597673-b21d5c3f8691?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="MMA Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-3">
                MMA Training
              </h3>
              <p className="mb-4">
                Learn mixed martial arts techniques while getting an incredible full-body workout. Develop coordination, strength, and self-defense skills.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Ideal for:</strong> All levels looking to learn combat sports techniques while improving fitness
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-[#1D3557] text-white px-3 py-1 rounded-full text-sm">
                  45-60 min
                </span>
                <a href="#schedule" className="text-primary font-bold text-sm">
                  View Schedule
                </a>
              </div>
            </div>
          </div>
          
          {/* Strength Training Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Strength Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-3">
                Strength Training
              </h3>
              <p className="mb-4">
                Build muscle, increase strength, and boost metabolism with our structured strength training classes using weights, resistance bands, and bodyweight.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Ideal for:</strong> Anyone looking to build muscle, tone up, or improve overall strength
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-[#1D3557] text-white px-3 py-1 rounded-full text-sm">
                  45-60 min
                </span>
                <a href="#schedule" className="text-primary font-bold text-sm">
                  View Schedule
                </a>
              </div>
            </div>
          </div>
          
          {/* Zumba/Aerobics Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Zumba Class" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1D3557] mb-3">
                Zumba & Aerobics
              </h3>
              <p className="mb-4">
                Burn calories while having fun with high-energy dance workouts combining Latin rhythms and aerobic movements for a total body workout.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Ideal for:</strong> Those who enjoy music-driven workouts in a fun, energetic environment
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-[#1D3557] text-white px-3 py-1 rounded-full text-sm">
                  45-60 min
                </span>
                <a href="#schedule" className="text-primary font-bold text-sm">
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1D3557] mb-4">Class Schedule Highlights</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-full" id="schedule">
              <thead>
                <tr className="bg-[#1D3557] text-white">
                  <th className="px-4 py-3 text-left">Class</th>
                  <th className="px-4 py-3 text-left">Morning (7-10AM)</th>
                  <th className="px-4 py-3 text-left">Women Only (1-5PM)</th>
                  <th className="px-4 py-3 text-left">Evening (5PM-12AM)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">MMA Training</td>
                  <td className="px-4 py-3">Mon, Wed (8AM)</td>
                  <td className="px-4 py-3">Tue, Thu (2PM)</td>
                  <td className="px-4 py-3">Mon-Sat (7PM)</td>
                </tr>
                <tr className="border-b bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Strength</td>
                  <td className="px-4 py-3">Tue, Thu, Sat (9AM)</td>
                  <td className="px-4 py-3">Mon, Wed, Fri (3PM)</td>
                  <td className="px-4 py-3">Mon-Sat (6PM, 9PM)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Zumba/Aerobics</td>
                  <td className="px-4 py-3">Mon, Wed, Fri (7AM)</td>
                  <td className="px-4 py-3">Mon-Sat (4PM)</td>
                  <td className="px-4 py-3">Tue, Thu (8PM)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            * Schedule subject to change. Please contact us for the most up-to-date class timings.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#trial" 
            className="bg-primary hover:bg-opacity-90 text-white font-['Montserrat'] font-bold px-8 py-4 rounded-md inline-block transition"
          >
            Try Your First Class FREE!
          </a>
        </div>
      </div>
    </section>
  );
};

export default GroupClassesSection;
