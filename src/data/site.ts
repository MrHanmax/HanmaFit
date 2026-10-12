// Single source of truth for everything the site says about Hanma.
// Edit here, rebuild, and every page updates.

// Photos are stored as optimised WebP in /public/img.
export const img = (file: string) => (file.startsWith('/') ? file : `/img/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`);

export const business = {
  name: 'Hanma Fitness Studio',
  short: 'Hanma',
  phoneDisplay: '0316 7911505',
  phoneTel: '+923167911505',
  whatsapp: '923167911505',
  email: 'hanma.pk@gmail.com',
  instagram: 'https://www.instagram.com/hanma.pk/',
  instagramHandle: '@hanma.pk',
  area: 'Gulistan e Johar, Karachi',
  addressLine: 'Manzoor Street, Gulistan e Johar, Karachi',
  // From the Google Business Profile, October 2026. Update when it changes.
  googleRating: 4.7,
  googleReviewCount: 125,
  mapsUrl: 'https://maps.google.com/?cid=12753312071920417619',
  reviewUrl: 'https://g.page/r/CWX-7K63JRtGEAI/review',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0244816928266!2d67.1292256!3d24.931235899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339d1857245cb%3A0xb0fcddc26c847b53!2sHanma%20Fitness%20Studio!5e0!3m2!1sen!2s!4v1744033731309!5m2!1sen!2s',
  lat: 24.931236,
  lng: 67.129226,
  youtubeNabeel: 'Lsb9g0-YAF8',
};

/** Build a wa.me link with a prefilled message. `code` tags where the lead came from. */
export function waLink(message: string, code = 'WEB') {
  const text = `${message} (${code})`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Hours in 24h decimal. Monday = 1 ... Saturday = 6. Sunday closed.
// Coaches work Monday to Friday. Saturday is an open floor with the front desk on site.
export type Block = {
  id: string;
  label: string;
  start: number;
  end: number;
  coach: string;       // 'Open floor' means no coach, front desk on site
  kind: 'coed' | 'women' | 'class' | 'mma';
  days: number[];
  track: 'floor' | 'room'; // strength floor, or the separate class room
};

const MON_FRI = [1, 2, 3, 4, 5];
const SAT = [6];

export const schedule: Block[] = [
  { id: 'morning', label: 'Morning coaching', start: 7, end: 11, coach: 'Faisal', kind: 'coed', days: MON_FRI, track: 'floor' },
  { id: 'women', label: 'Women only', start: 13, end: 17, coach: 'Samina', kind: 'women', days: MON_FRI, track: 'floor' },
  { id: 'early-evening', label: 'Evening coaching', start: 17, end: 19, coach: 'Rafi', kind: 'coed', days: MON_FRI, track: 'floor' },
  { id: 'peak', label: 'Evening coaching', start: 19, end: 22, coach: 'Rafi and Khubaib', kind: 'coed', days: MON_FRI, track: 'floor' },
  { id: 'late', label: 'Late evening', start: 22, end: 23.5, coach: 'Khubaib', kind: 'coed', days: MON_FRI, track: 'floor' },
  { id: 'open-late', label: 'Open floor', start: 23.5, end: 24, coach: 'Open floor', kind: 'coed', days: MON_FRI, track: 'floor' },
  { id: 'samina-class', label: 'Aerobics class, coed', start: 17, end: 18, coach: 'Samina', kind: 'class', days: MON_FRI, track: 'room' },
  { id: 'mma', label: 'MMA class', start: 21, end: 22.5, coach: 'Owais', kind: 'mma', days: [2, 4, 6], track: 'room' },
  // Saturday: open floor, front desk on site
  { id: 'sat-morning', label: 'Open floor', start: 7, end: 11, coach: 'Open floor', kind: 'coed', days: SAT, track: 'floor' },
  { id: 'sat-afternoon', label: 'Open floor', start: 13, end: 17, coach: 'Open floor', kind: 'coed', days: SAT, track: 'floor' },
  { id: 'sat-evening', label: 'Open floor', start: 17, end: 24, coach: 'Open floor', kind: 'coed', days: SAT, track: 'floor' },
];

export const hoursSummary = [
  { label: 'Morning, coed', time: '7 am to 11 am' },
  { label: 'Women only', time: 'Mon to Fri, 1 pm to 5 pm' },
  { label: 'Evening, coed', time: '5 pm to 12 am' },
  { label: 'Aerobics class, coed', time: 'Mon to Fri, 5 pm to 6 pm' },
  { label: 'MMA class', time: 'Tue, Thu, Sat, 9 pm to 10:30 pm' },
  { label: 'Saturday', time: 'Open floor, front desk on site' },
  { label: 'Sunday', time: 'Closed' },
];

export type Price = { name: string; monthly?: number; quarterly?: number; save?: string; once?: number; note?: string };

export const pricing: { group: string; items: Price[] }[] = [
  {
    group: 'Coaching',
    items: [
      { name: 'Personal training', monthly: 20000, quarterly: 51000, save: 'Save 15%', note: 'One to one, with your own coach' },
      { name: 'Group training', monthly: 12000, quarterly: 31000, save: 'Save 14%', note: 'Small coached groups on the strength floor' },
      { name: 'Aerobics and Zumba classes', monthly: 5000, note: 'Women only, 1 to 5 pm, plus a coed class 5 to 6 pm, Monday to Friday' },
    ],
  },
  {
    group: 'Gym access',
    items: [
      { name: 'Basic membership', monthly: 7000, quarterly: 15000, save: 'Save 29%', note: 'Train on your own, floor staff on hand' },
      { name: 'MMA', monthly: 5000, note: 'Tue, Thu, Sat with Owais' },
      { name: 'Day pass', once: 1000 },
    ],
  },
  {
    group: 'Hanma Health',
    items: [
      { name: 'Health programme', once: 15000, note: 'Assessment, diet plan and 4 follow ups' },
      { name: 'Clinical diet plan', once: 7500 },
      { name: 'Nutrition consultation', once: 3000, note: 'Per session' },
      { name: 'Physiotherapy', note: 'By appointment' },
    ],
  },
];

export const admission = { fee: 5000, note: 'One time, on monthly plans. Waived on every quarterly plan.' };

export type Coach = { name: string; role: string; bio: string; photo?: string; hours?: string; cert?: string };

export const coaches: Coach[] = [
  {
    name: 'Fawad Haris',
    role: 'Founder and head coach',
    cert: 'BS Human Nutrition and Dietetics',
    bio: 'A nutrition graduate with years in strength training and martial arts. Builds the programmes every coach at Hanma runs.',
    photo: '4ba7985a-6e75-43b5-9130-a3388a13c377.png',
  },
  {
    name: 'Khubaib',
    role: 'Floor manager and coach',
    cert: 'Level 2 certified coach',
    bio: 'Runs the floor in the evenings and coaches small groups and personal training clients.',
    photo: 'e248315a-02bc-42c2-8b1d-f9e67eda06e0.png',
    hours: 'Mon to Fri, 7 pm to 11:30 pm',
  },
  {
    name: 'Rafi Khan',
    role: 'Strength coach',
    cert: 'Level 2 certified coach',
    bio: 'Coaches the evening groups, from first time lifters to people chasing a stronger total.',
    hours: 'Mon to Fri, 5 pm to 10 pm',
  },
  {
    name: 'Muhammad Faisal',
    role: 'Strength and mobility coach',
    cert: 'Level 2 certified coach',
    bio: 'Owns the mornings. Strength, mobility and personal training before your work day starts.',
    photo: 'bc68b55b-cee8-48d8-b7b6-abe91b36b81d.png',
    hours: 'Mon to Fri, 7 am to 11 am',
  },
  {
    name: 'Samina Faisal',
    role: "Women's coach",
    cert: 'Level 2 certified coach',
    bio: 'Leads the women only afternoons and a coed aerobics class from 5 to 6 pm: aerobics, Zumba, group training and personal training.',
    hours: 'Mon to Fri, 1 pm to 6 pm',
    hours: '1 pm to 5 pm',
  },
  {
    name: 'Owais',
    role: 'MMA coach',
    cert: 'Level 2 certified coach',
    bio: 'Striking, grappling and conditioning for beginners and people who want to compete.',
    hours: 'Tue, Thu, Sat, 9 pm',
  },
  {
    name: 'Dr Muhammad Ismail',
    role: 'Physiotherapist',
    cert: 'DPT, Doctor of Physical Therapy',
    bio: 'Assessments, injury rehab and return to training, so you can keep coming in while you recover.',
    photo: 'ad88e6d4-b69d-47c1-bbb6-f1b989138a60.png',
    hours: 'By appointment',
  },
];

const HC = 'https://hanmacoaching.netlify.app/assets';
export const onlineCoachingUrl = 'https://hanmacoaching.netlify.app';

export const results = {
  studioGroup: {
    name: 'Studio group training member',
    headline: '“Kaafi difference hai.”',
    caption: 'His words on seeing his own side by side. Trained in our studio group sessions.',
    before: `${HC}/transformation-c-before.jpg`,
    after: `${HC}/transformation-c-after.jpg`,
  },
  bushra: {
    name: 'Bushra, coached by Fawad since 2023',
    quote: 'He really tries to understand you as an individual.',
    poster: `${HC}/poster-testimonial.jpg`,
    url: 'https://hanmacoaching.netlify.app/results',
  },
  talal: {
    name: 'Talal',
    headline: 'More than 10 kg down in 11 months',
    period: 'June 2023 to May 2024',
    quote:
      'The consistent training at Hanma completely changed my physique and confidence. The trainers kept me accountable and helped me build habits that stuck.',
    photo: '7a8bb304-207c-4117-8cde-719b55808c38.png',
  },
  amna: {
    name: 'Amna',
    headline: 'Deadlifting 100 kg while managing a thyroid condition',
    quote:
      'The trainers helped me manage my condition and change my body. I now deadlift 100 kg and have strength I never thought possible.',
    before: '8d0f22df-b10f-4479-91d6-28957c2df79a.png',
    after: '30195ff3-3802-42b3-9c55-305ac22229c7.png',
  },
};

export const studioPhotos = {
  hero: 'f4f9190c-fea4-4cd9-b698-415c289217aa.png',
  session: 'c56beac8-6065-461b-828e-130225df7620.png',
  weights: '0b9d827d-58b6-480b-9446-a293c0a0ede8.png',
  community: 'f16e9ac7-6467-41d4-b94a-092b08e764d6.png',
  floor: 'b2442b84-2fcd-4547-9d6d-16ca54c60769.png',
  strength: 'c7b05135-abb8-4ee7-ab96-a59d88bb52a8.png',
  functional: '64c99da4-ad67-4994-a200-7e27a73b561f.png',
  logo: '2558d1af-4246-4dcd-93b1-2bce3d9b329e.png',
  og: 'fce7f228-5957-4f0e-b8ea-546941f34341.png',
  favicon: '87eadf23-cf91-47c0-8971-55f53a612c23.png',
};

export const faqs = [
  {
    q: 'Where is Hanma in Gulistan e Johar?',
    a: 'On Manzoor Street, Gulistan e Johar, Karachi. Coached Monday to Friday, open floor on Saturday, closed Sunday. Tap Get Directions on this page for the map.',
  },
  {
    q: 'Is the first session really free?',
    a: 'Yes. Message us on WhatsApp or fill in the trial form, pick a time, and train one coached session with us before you decide anything.',
  },
  {
    q: 'Do you have women only hours?',
    a: 'Yes. Monday to Friday, 1 pm to 5 pm, the whole studio is women only and coached by Samina.',
  },
  {
    q: 'How much is membership?',
    a: 'Basic membership is 7,000 a month, group training 12,000 and personal training 20,000. Quarterly plans save up to 29% and have no admission fee.',
  },
  {
    q: 'I have an injury. Can I still train?',
    a: 'Usually, yes. Dr Ismail, our physiotherapist, assesses you first and your coach works around it.',
  },
  {
    q: "I've never trained before. Is that a problem?",
    a: 'No. Most of our members started as beginners. Your coach sets your starting point in the first session.',
  },
];

export type Programme = {
  slug: string;
  name: string;
  short: string;
  when: string;
  who: string;
  from: string;
  tone: 'coed' | 'women' | 'mma' | 'health';
  goal: string;
  title: string;
  description: string;
  intro: string[];
  includes: string[];
  photo?: string;
  video?: { src: string; poster: string; label: string };
};

export const programmes: Programme[] = [
  {
    slug: 'personal-training',
    name: 'Personal training',
    short: 'One coach, one plan, built around you.',
    when: 'Mornings with Faisal, evenings with Khubaib or Rafi',
    who: 'For fat loss, strength, sport or a body that has been ignored for a while',
    from: '20,000 a month',
    tone: 'coed',
    goal: 'Get stronger',
    title: 'Personal Trainer in Gulistan e Johar | Hanma Fitness',
    description: 'Personal trainer in Gulistan e Johar, Karachi. One to one coaching, your own plan and nutrition guidance at Hanma Fitness Studio. First session free.',
    intro: [
      'You train with the same coach every session. They write your programme, correct your form rep by rep, and adjust the plan as you progress.',
      'Mornings run quieter, so if you want the floor to yourself, train with Faisal between 7 and 11 am.',
    ],
    includes: ['Assessment in your first session', 'A written programme that changes as you do', 'Nutrition guidance from a team led by a qualified nutritionist', 'Quarterly plan at 51,000, no admission fee'],
    photo: '/img/studio-rack.webp',
  },
  {
    slug: 'group-classes',
    name: 'Group training',
    short: 'Small coached groups, so you still get corrected.',
    when: 'Mornings and evenings, Monday to Friday',
    who: 'For people who want coaching and energy without the PT price',
    from: '12,000 a month',
    tone: 'coed',
    goal: 'Get stronger',
    title: 'Group Training Classes in Gulistan e Johar | Hanma',
    description: 'Coached small group strength and conditioning classes in Gulistan e Johar. A coach watches every rep. First session free.',
    intro: [
      'Groups are kept small, so your coach can still watch your form and push your numbers.',
      'Sessions mix strength work with conditioning. You leave knowing exactly what you lifted and what comes next.',
    ],
    includes: ['Coached strength and conditioning', 'Morning and evening groups, Monday to Friday', 'Progress tracked session to session', 'Quarterly plan at 31,000, no admission fee'],
    photo: 'f16e9ac7-6467-41d4-b94a-092b08e764d6.png',
  },
  {
    slug: 'women-only',
    name: 'Women only sessions',
    short: 'The whole studio, women only, every weekday afternoon.',
    when: 'Monday to Friday, 1 pm to 5 pm, with Samina',
    who: 'Aerobics, Zumba, strength and personal training for women',
    from: '5,000 a month',
    tone: 'women',
    goal: 'Women only sessions',
    title: 'Ladies Gym in Gulistan e Johar | Hanma Fitness Studio',
    description: 'Ladies gym in Gulistan e Johar, Karachi. Women only hours Monday to Friday, 1 to 5 pm, with a female coach: aerobics, Zumba and strength.',
    intro: [
      'Monday to Friday, from 1 pm to 5 pm, the whole studio is women only, with Samina coaching on the floor.',
      'Join the aerobics and Zumba classes, lift in a coached group, or book personal training with Samina. Prefer evenings? Samina also runs a coed aerobics class from 5 to 6 pm.',
    ],
    photo: '/img/studio-strength-blue.webp',
    includes: ['Aerobics and Zumba classes, 5,000 a month', 'Personal training with Samina, priced by plan, ask us', 'Female coach on the floor, Monday to Friday', 'Coed aerobics class, 5 to 6 pm, Monday to Friday'],
  },
  {
    slug: 'mma',
    name: 'MMA',
    short: 'Striking, grappling and conditioning with Owais.',
    when: 'Tuesday, Thursday, Saturday, 9 pm to 10:30 pm',
    who: 'Complete beginners welcome. Competitors too.',
    from: '5,000 a month',
    tone: 'mma',
    goal: 'Learn MMA',
    title: 'MMA Classes in Gulistan e Johar | Hanma Fitness Studio',
    description: 'MMA classes in Gulistan e Johar, Karachi. Striking, grappling and conditioning, three evenings a week. Beginners welcome. First class free.',
    intro: [
      'Three classes a week in our dedicated class room, separate from the weights floor.',
      'Every class covers technique, drilling and conditioning. Beginners start with the basics and progress at their own pace.',
    ],
    video: { src: '/video/mma-clip.mp4', poster: '/img/mma-clip.webp', label: 'Boxing and pad work at Hanma Fitness Studio' },
    includes: ['Tuesday, Thursday and Saturday, 9 pm', 'Striking and grappling fundamentals', 'Conditioning in every class', 'Separate class room'],
  },
  {
    slug: 'hanma-health',
    name: 'Hanma Health',
    short: 'Physiotherapy, diet plans and nutrition coaching.',
    when: 'By appointment',
    who: 'For injuries, medical conditions and people who want their diet sorted properly',
    from: '3,000 a session',
    tone: 'health',
    goal: 'Train around an injury',
    title: 'Physio and Diet Plans in Gulistan e Johar | Hanma Health',
    description: 'Physiotherapy, clinical diet plans and nutrition consultations at Hanma Fitness Studio, Gulistan e Johar. Train safely around injuries and conditions.',
    intro: [
      'Dr Ismail, DPT, assesses injuries and builds your rehab, then hands you over to a coach who trains around it.',
      'Our nutrition team writes diet plans for weight loss, muscle gain and medical conditions, with follow ups to keep you on track.',
    ],
    photo: '/img/studio-physio-room.webp',
    includes: ['Health programme: assessment, diet plan and 4 follow ups, 15,000', 'Clinical diet plan, 7,500', 'Nutrition consultation, 3,000 a session', 'Physiotherapy by appointment'],
  },
];

// Real photos of the studio, used in the tour gallery and programme pages
export const tour = [
  { src: '/img/studio-rack.webp', alt: 'Squat rack and Olympic plates on the Hanma strength floor', label: 'Strength floor' },
  { src: '/img/studio-strength-blue.webp', alt: 'Benches and racks on the Hanma strength floor in Gulistan e Johar', label: 'Strength floor' },
  { src: '/img/studio-machines.webp', alt: 'Cable machines at Hanma Fitness Studio', label: 'Machines' },
  { src: '/img/studio-training-area.webp', alt: 'Training area at Hanma Fitness Studio, Gulistan e Johar', label: 'Training floor' },
  { src: '/img/studio-physio-room.webp', alt: 'The physiotherapy room at Hanma Fitness Studio', label: 'Physio room' },
  { src: '/img/studio-hanma-health.webp', alt: 'Hanma Health at Hanma Fitness Studio', label: 'Hanma Health' },
  { src: '/img/studio-floor.webp', alt: 'Open training floor at Hanma Fitness Studio', label: 'Training floor' },
];
