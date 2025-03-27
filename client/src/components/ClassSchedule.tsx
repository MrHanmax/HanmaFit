import { WeekSchedule } from "@/lib/types";

// Sample schedule data
const scheduleData: WeekSchedule = {
  monday: {
    morning: [
      { title: "MMA", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Strength", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" }
    ],
    afternoon: [
      { title: "Women's MMA", time: "1:30 - 2:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-pink-200/50" },
      { title: "Women's Zumba", time: "3:00 - 4:00", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-pink-300/50" }
    ],
    evening: [
      { title: "Strength", time: "5:30 - 6:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" },
      { title: "MMA", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Zumba", time: "8:30 - 9:30", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-[#a8dadc]/20" }
    ]
  },
  tuesday: {
    morning: [
      { title: "Zumba", time: "7:00 - 8:00", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-[#a8dadc]/20" },
      { title: "MMA", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" }
    ],
    afternoon: [
      { title: "Women's Strength", time: "1:30 - 2:30", intensity: "Moderate-High", level: "All levels", type: "Strength", bgColor: "bg-pink-300/50" },
      { title: "Women's Aerobics", time: "3:00 - 4:00", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-pink-200/50" }
    ],
    evening: [
      { title: "MMA", time: "5:30 - 6:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Aerobics", time: "7:00 - 8:00", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-[#a8dadc]/20" },
      { title: "Strength", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" }
    ]
  },
  wednesday: {
    morning: [
      { title: "Strength", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" },
      { title: "Aerobics", time: "8:30 - 9:30", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-[#a8dadc]/20" }
    ],
    afternoon: [
      { title: "Women's MMA", time: "1:30 - 2:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-pink-200/50" },
      { title: "Women's Zumba", time: "3:00 - 4:00", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-pink-300/50" }
    ],
    evening: [
      { title: "Strength", time: "5:30 - 6:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" },
      { title: "MMA", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Zumba", time: "8:30 - 9:30", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-[#a8dadc]/20" }
    ]
  },
  thursday: {
    morning: [
      { title: "MMA", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Strength", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" }
    ],
    afternoon: [
      { title: "Women's Strength", time: "1:30 - 2:30", intensity: "Moderate-High", level: "All levels", type: "Strength", bgColor: "bg-pink-300/50" },
      { title: "Women's Aerobics", time: "3:00 - 4:00", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-pink-200/50" }
    ],
    evening: [
      { title: "MMA", time: "5:30 - 6:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Aerobics", time: "7:00 - 8:00", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-[#a8dadc]/20" },
      { title: "Strength", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" }
    ]
  },
  friday: {
    morning: [
      { title: "Zumba", time: "7:00 - 8:00", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-[#a8dadc]/20" },
      { title: "MMA", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" }
    ],
    afternoon: [
      { title: "Women's MMA", time: "1:30 - 2:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-pink-200/50" },
      { title: "Women's Zumba", time: "3:00 - 4:00", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-pink-300/50" }
    ],
    evening: [
      { title: "Strength", time: "5:30 - 6:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" },
      { title: "MMA", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Zumba", time: "8:30 - 9:30", intensity: "Moderate", level: "All levels", type: "Zumba", bgColor: "bg-[#a8dadc]/20" }
    ]
  },
  saturday: {
    morning: [
      { title: "Strength", time: "7:00 - 8:00", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" },
      { title: "Aerobics", time: "8:30 - 9:30", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-[#a8dadc]/20" }
    ],
    afternoon: [
      { title: "Women's Strength", time: "1:30 - 2:30", intensity: "Moderate-High", level: "All levels", type: "Strength", bgColor: "bg-pink-300/50" },
      { title: "Women's Aerobics", time: "3:00 - 4:00", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-pink-200/50" }
    ],
    evening: [
      { title: "MMA", time: "5:30 - 6:30", intensity: "High", level: "All levels", type: "MMA", bgColor: "bg-[#457b9d]/10" },
      { title: "Aerobics", time: "7:00 - 8:00", intensity: "Moderate", level: "All levels", type: "Aerobics", bgColor: "bg-[#a8dadc]/20" },
      { title: "Strength", time: "8:30 - 9:30", intensity: "High", level: "All levels", type: "Strength", bgColor: "bg-[#e63946]/10" }
    ]
  }
};

const ClassSchedule = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;
  
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="grid grid-cols-7 bg-[#1d3557] text-white text-center p-4">
        <div className="font-bold">Time</div>
        {days.map((day, index) => (
          <div key={index} className="font-bold">{day}</div>
        ))}
      </div>
      
      {/* Morning Block */}
      <div className="grid grid-cols-7 border-b text-center p-2">
        <div className="font-semibold p-2">7:00 - 10:00<br /><span className="text-xs text-[#e63946] font-normal">Co-Ed</span></div>
        {dayKeys.map((day, index) => (
          <div key={index} className="p-2">
            {scheduleData[day].morning.map((classItem, idx) => (
              <div key={idx} className={`${classItem.bgColor} p-2 rounded ${idx > 0 ? 'mt-2' : ''}`}>
                <p className="font-semibold">{classItem.title}</p>
                <p className="text-xs">{classItem.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Afternoon Block */}
      <div className="grid grid-cols-7 border-b text-center p-2 bg-pink-50">
        <div className="font-semibold p-2">1:00 - 5:00<br /><span className="text-xs text-[#e63946] font-normal">Female Only</span></div>
        {dayKeys.map((day, index) => (
          <div key={index} className="p-2">
            {scheduleData[day].afternoon.map((classItem, idx) => (
              <div key={idx} className={`${classItem.bgColor} p-2 rounded ${idx > 0 ? 'mt-2' : ''}`}>
                <p className="font-semibold">{classItem.title}</p>
                <p className="text-xs">{classItem.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Evening Block */}
      <div className="grid grid-cols-7 text-center p-2">
        <div className="font-semibold p-2">5:00 - 12:00<br /><span className="text-xs text-[#e63946] font-normal">Co-Ed</span></div>
        {dayKeys.map((day, index) => (
          <div key={index} className="p-2">
            {scheduleData[day].evening.map((classItem, idx) => (
              <div key={idx} className={`${classItem.bgColor} p-2 rounded ${idx > 0 ? 'mt-2' : ''}`}>
                <p className="font-semibold">{classItem.title}</p>
                <p className="text-xs">{classItem.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;
