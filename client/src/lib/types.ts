// Lead types
export interface TrialFormData {
  name: string;
  email: string;
  phone: string;
  classInterest: string;
  howHeard: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

// Welcome Message types
export interface WelcomeMessageFormData {
  name: string;
  email?: string;  // Optional email field
  fitnessGoals: string;
  preferredWorkoutType: string;
  experienceLevel: string;
  personalMessage: string;
}

export interface WelcomeMessageResponse {
  id: number;
  name: string;
  email?: string;  // Optional email field
  fitnessGoals: string;
  preferredWorkoutType: string;
  experienceLevel: string;
  personalMessage: string;
  createdAt: string;
}

// Schedule types
export interface ClassInfo {
  title: string;
  time: string;
  intensity: 'Low' | 'Moderate' | 'Moderate-High' | 'High';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';
  type: 'MMA' | 'Strength' | 'Zumba' | 'Aerobics';
  bgColor: string;
}

export interface DaySchedule {
  morning: ClassInfo[];
  afternoon: ClassInfo[]; // female only
  evening: ClassInfo[];
}

export interface WeekSchedule {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
}

// Pricing types
export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  bgColor: string;
  buttonColor: string;
}

// Trainer types
export interface Trainer {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  goal: string;
  rating: number;
}

export interface Transformation {
  id: string;
  name: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}
