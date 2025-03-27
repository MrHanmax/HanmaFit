export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface TrialFormData {
  name: string;
  phone: string;
  email: string;
  class: string;
  goals: string;
}

export interface Membership {
  title: string;
  price: string;
  period: string;
  featured?: boolean;
  features: Array<{
    included: boolean;
    text: string;
  }>;
}

export interface ScheduleItem {
  class: string;
  morning: string;
  womenOnly: string;
  evening: string;
}

export interface Trainer {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export interface Transformation {
  name: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}
