export const SITE_INFO = {
  name: "Hanma Fitness Studio",
  tagline: "Johar's Premium Training Studio",
  address: "Manzoor St, Block 2 Block 1 A Gulistan-e-Johar, Karachi, 35400",
  phone: "03167911505",
  phoneLink: "tel:03167911505",
  whatsapp: "03167911505",
  whatsappLink: "https://wa.me/923167911505",
  email: "hanma.pk@gmail.com",
  emailLink: "mailto:hanma.pk@gmail.com",
  instagram: "@hanma.pk",
  instagramLink: "https://www.instagram.com/hanma.pk/",
  operatingHours: {
    weekdays: {
      title: "Monday - Saturday",
      hours: [
        "7:00 AM - 10:00 AM (Co-Ed Training)",
        "1:00 PM - 5:00 PM (Female Only Hours)",
        "5:00 PM - 12:00 AM (Co-Ed Training)"
      ]
    },
    sunday: "Closed"
  }
};

export const MEMBERSHIP_PLANS = [
  {
    title: "Group Class Access",
    price: "₨12,000",
    period: "month",
    features: [
      { included: true, text: "Unlimited Group Classes" },
      { included: true, text: "Access to MMA, Strength & Zumba" },
      { included: true, text: "Standard Gym Access" },
      { included: true, text: "Fitness Assessment" },
      { included: false, text: "Personal Training Sessions" },
      { included: false, text: "Nutrition Coaching" }
    ]
  },
  {
    title: "Unlimited Access",
    price: "₨16,000",
    period: "month",
    featured: true,
    features: [
      { included: true, text: "Unlimited Group Classes" },
      { included: true, text: "Access to All Training Areas" },
      { included: true, text: "2 Personal Training Sessions/Month" },
      { included: true, text: "Basic Nutrition Guidance" },
      { included: true, text: "Monthly Progress Assessment" },
      { included: true, text: "Priority Booking" }
    ]
  },
  {
    title: "PT Packages",
    price: "₨20,000",
    period: "month",
    features: [
      { included: true, text: "12 PT Sessions/Month" },
      { included: true, text: "Full Gym Access" },
      { included: true, text: "All Group Classes" },
      { included: true, text: "Customized Workout Plan" },
      { included: true, text: "Detailed Nutrition Coaching" },
      { included: true, text: "Bi-weekly Progress Tracking" }
    ]
  }
];

export const SCHEDULE = [
  {
    class: "MMA Training",
    morning: "Mon, Wed (8AM)",
    womenOnly: "Tue, Thu (2PM)",
    evening: "Mon-Sat (7PM)"
  },
  {
    class: "Strength",
    morning: "Tue, Thu, Sat (9AM)",
    womenOnly: "Mon, Wed, Fri (3PM)",
    evening: "Mon-Sat (6PM, 9PM)"
  },
  {
    class: "Zumba/Aerobics",
    morning: "Mon, Wed, Fri (7AM)",
    womenOnly: "Mon-Sat (4PM)",
    evening: "Tue, Thu (8PM)"
  }
];

export const TRAINERS = [
  {
    name: "Ahmed Khan",
    title: "Head Coach & MMA Specialist",
    bio: "With 10+ years of experience and multiple fitness certifications, Ahmed specializes in MMA training and strength conditioning. His coaching philosophy focuses on proper technique and progressive overload for maximum results.",
    specialties: ["MMA", "Strength", "HIIT"],
    image: "https://images.unsplash.com/photo-1583468986666-9b581e3bbcc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Malik",
    title: "Zumba Instructor & Female Training Specialist",
    bio: "Sarah leads our women-only training sessions and specializes in Zumba, aerobics, and women's fitness. Her energetic teaching style and supportive approach have helped countless members achieve their fitness goals.",
    specialties: ["Zumba", "Aerobics", "Nutrition"],
    image: "https://images.unsplash.com/photo-1589690064908-0b5740a18149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Usman Ali",
    title: "Strength & Conditioning Specialist",
    bio: "Usman is our strength training expert with a background in sports science. He excels at designing progressive strength programs that build muscle, improve performance, and prevent injuries through proper form.",
    specialties: ["Strength", "Bodybuilding", "Rehab"],
    image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
