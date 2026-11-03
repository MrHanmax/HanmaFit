// Guides: useful answers to what people in Gulistan e Johar search for before joining a gym.
// Each guide is written for the reader first; Hanma's own facts come from site.ts.

export type Guide = {
  slug: string;
  title: string;        // on page h1
  seoTitle: string;     // <title>, under 65 characters
  description: string;  // meta description, 120 to 160 characters
  lede: string;
  published: string;    // ISO date
  sections: { h: string; p: string[]; list?: string[] }[];
  related: { href: string; label: string }[];
};

export const guides: Guide[] = [
  {
    slug: 'best-gym-in-karachi',
    title: 'Best Gym in Karachi: How to Choose One That Actually Works',
    seoTitle: 'Best Gym in Karachi (2026): How to Choose the Right One',
    description: 'Looking for the best gym in Karachi? What actually matters: coaching, timings, women only hours, physio, honest prices and real reviews. Plus how Hanma compares.',
    lede: 'Karachi has hundreds of gyms, from big chains in DHA and Clifton to studios in Gulshan, Johar and North Nazimabad. The best gym is not the one with the most machines. It is the one where you keep showing up and keep improving. Here is how to judge any gym in Karachi before you pay.',
    published: '2026-11-03',
    sections: [
      {
        h: '1. A coach on the floor, not just a membership card',
        p: [
          'Most people quit a gym in the first three months, usually because nobody tells them what to do. The best gyms in Karachi have a coach on the floor during your hours who corrects your form and tracks your progress.',
          'Ask: who coaches at my time, and will they know my name and my plan after a month?',
        ],
      },
      {
        h: '2. Distance and timings that fit your day',
        p: [
          'Traffic decides more gym memberships in Karachi than equipment does. A great gym 40 minutes away loses to a good gym 10 minutes away. Pick one close to home or work, and check that its coached hours match when you can actually train.',
        ],
      },
      {
        h: '3. Proper women only hours',
        p: [
          'For many women in Karachi, comfort matters more than anything else. Look for real women only hours with a female coach, not a corner of the main floor. Ask whether evenings are covered too, since many ladies timings end by 5 pm.',
        ],
      },
      {
        h: '4. Support beyond the workout',
        p: [
          'Back pain, knee pain, PCOS, thyroid and post pregnancy recovery are common reasons people start training. A gym with a physiotherapist and nutrition support can train you around them safely instead of guessing.',
        ],
      },
      {
        h: '5. Honest, upfront prices',
        p: [
          'The best gyms publish their prices. Check the admission fee, whether a quarterly plan waives it, and whether personal training is clearly priced. If a gym will not tell you the price until you visit, ask why.',
        ],
      },
      {
        h: '6. Reviews from real members',
        p: [
          'Read the latest Google reviews, not just the rating. Look for comments about coaches by name, cleanliness and how staff treat beginners. A 4.5 with recent detailed reviews says more than a 5.0 with a handful.',
        ],
      },
      {
        h: 'Try before you commit',
        p: [
          'Any gym worth joining will let you train one session first. Go at the time you would actually train, meet the coach and see how busy it is.',
        ],
      },
      {
        h: 'Where Hanma fits',
        p: [
          'Hanma Fitness Studio is a coached gym in Gulistan e Johar, serving Johar, Gulshan e Iqbal and nearby areas of Karachi. It is rated 4.7 on Google by more than 120 members.',
        ],
        list: [
          'Coaches on the floor every weekday session, morning, afternoon and evening',
          'Women only hours Monday to Friday, 1 to 5 pm, plus a female coach from 6 to 8 pm',
          'In house physiotherapist and diet plans',
          'Personal training, group training, aerobics and Zumba, and MMA under one roof',
          'All prices published online, and your first session is free',
        ],
      },
    ],
    related: [{ href: '/pricing', label: 'See every Hanma price' }, { href: '/about', label: 'Meet the coaches' }],
  },
  {
    slug: 'gym-fees-gulistan-e-johar',
    title: 'Gym Fees in Gulistan e Johar: What You Actually Pay',
    seoTitle: 'Gym Fees in Gulistan e Johar, Karachi (2026 Guide)',
    description: 'What gym membership costs in Gulistan e Johar, Karachi: monthly vs quarterly, admission fees, personal training and what to check before you pay.',
    lede: 'Gym prices in Johar are easy to compare on paper and hard to compare in real life. Here is how fees usually work, what Hanma charges, and the questions worth asking any gym before you pay.',
    published: '2026-10-19',
    sections: [
      {
        h: 'How gym fees are usually structured',
        p: [
          'Most gyms in Gulistan e Johar (also spelled Gulistan e Jauhar) charge a one time admission fee plus a monthly fee. Many also offer a quarterly plan that works out cheaper per month.',
          'The headline monthly price only tells part of the story. Two gyms at the same price can be very different value depending on whether a coach is actually on the floor, how crowded peak hours get, and whether women only hours exist.',
        ],
      },
      {
        h: 'What Hanma charges',
        p: ['All prices are in PKR and paid in advance. Quarterly plans run for 90 days and have no admission fee.'],
        list: [
          'Basic membership: 7,000 a month, or 15,000 a quarter',
          'Group training: 12,000 a month, or 31,000 a quarter',
          'Personal training: 20,000 a month, or 51,000 a quarter',
          'Aerobics and Zumba classes: 5,000 a month',
          'MMA: 5,000 a month',
          'Day pass: 1,000',
          'Admission: 5,000 once, on monthly plans only',
        ],
      },
      {
        h: 'Monthly or quarterly?',
        p: [
          'If you already know you will train for three months, quarterly is the better deal. On Basic membership, quarterly works out to 5,000 a month instead of 7,000, and you skip the 5,000 admission fee.',
          'If you are not sure yet, take the free first session, then decide. A good gym will tell you which plan fits rather than push the most expensive one.',
        ],
      },
      {
        h: 'Questions to ask any gym before you pay',
        p: ['Whatever gym you choose, these five questions save money and regret.'],
        list: [
          'Is a coach on the floor during the hours I will train, or only on paper?',
          'How busy is it at my time? Visit at that hour before you join.',
          'Are there women only hours, and is a female coach present?',
          'What happens if I miss a month: can I freeze, or do I lose it?',
          'Can I train one session free before I decide?',
        ],
      },
    ],
    related: [{ href: '/pricing', label: 'See the full Hanma price list' }, { href: '/services', label: 'Compare programmes' }],
  },
  {
    slug: 'ladies-gym-gulistan-e-johar',
    title: 'Ladies Gym in Gulistan e Johar: How to Choose One',
    seoTitle: 'Ladies Gym in Gulistan e Johar: How to Choose (2026)',
    description: 'Looking for a ladies gym in Gulistan e Johar? What to check: women only hours, a female coach, classes and privacy, plus what Hanma offers women.',
    lede: 'For many women in Johar, the gym itself is not the hard part. Finding one where you feel comfortable is. These are the things that matter most, and how Hanma handles each.',
    published: '2026-10-19',
    sections: [
      {
        h: 'Real women only hours, not a corner of the floor',
        p: [
          'Some gyms call a small room a ladies section. Ask whether the whole studio is women only during those hours, and whether men can walk through.',
          'At Hanma, from 1 pm to 5 pm, Monday to Friday, the whole studio is women only.',
        ],
      },
      {
        h: 'A female coach on the floor',
        p: [
          'A coach who corrects your form and builds your plan makes a bigger difference than any machine. Ask who coaches during women only hours and whether she is there every day.',
          'Samina coaches the women only afternoons at Hanma and also runs a women only aerobics class from 5 to 6 pm in the separate class room. If you can only train after work or college, Urooj is on the floor as a female coach from 6 to 8 pm, Monday to Friday.',
        ],
      },
      {
        h: 'Classes if you prefer training in a group',
        p: [
          'Many women start with classes because they are social and structured. Hanma runs aerobics and Zumba during women only hours, at 5,000 a month.',
        ],
      },
      {
        h: 'Training around health conditions',
        p: [
          'Thyroid issues, PCOS, back pain and post pregnancy recovery are common reasons women start training. Tell the gym upfront and ask how they adapt your plan.',
          'Hanma has an in house physiotherapist, Dr Ismail (DPT), and a consultant dietitian, Arooba Nawaz, for diet plans, so your coach is not guessing.',
        ],
      },
      {
        h: 'Try before you commit',
        p: [
          'Visit during the hours you would actually train. Your first session at Hanma is free, so you can see the space, meet your coach and decide without pressure.',
        ],
      },
    ],
    related: [{ href: '/services/women-only', label: 'Women only sessions, and Urooj on why women should lift' }, { href: '/about', label: 'Meet the coaches' }],
  },
  {
    slug: 'personal-trainer-karachi-first-month',
    title: 'Personal Trainer in Karachi: What Your First Month Should Look Like',
    seoTitle: 'Personal Trainer in Karachi: Your First Month, Explained',
    description: 'What a good personal trainer in Karachi does in your first month: assessment, a written plan, form coaching and nutrition. Know what to expect before you pay.',
    lede: 'Personal training is the biggest gym spend most people make, so it is worth knowing what good looks like. Here is what your first month with a personal trainer should include.',
    published: '2026-10-19',
    sections: [
      {
        h: 'Week 1: an assessment, not a workout to exhaust you',
        p: [
          'A good trainer starts by finding out where you are: how you move, old injuries, what you eat, how you sleep and what you want. If your first session is just a hard workout, that is a warning sign.',
        ],
      },
      {
        h: 'A written plan that changes as you do',
        p: [
          'You should know what you are doing each session and why. Weights, sets and reps should be written down, so progress is measured, not guessed.',
        ],
      },
      {
        h: 'Form first, then load',
        p: [
          'The trainer should correct your technique rep by rep before adding weight. This is where most of the value of one to one coaching comes from.',
        ],
      },
      {
        h: 'Nutrition that fits your life',
        p: [
          'Training alone rarely changes your body if eating stays the same. Expect simple guidance that fits Pakistani home food, not a diet you cannot follow.',
        ],
      },
      {
        h: 'By week 4: a clear check in',
        p: [
          'After a month you should see a measurable change: a lift going up, inches down, or better energy, and a conversation about the next month.',
        ],
      },
      {
        h: 'Personal training at Hanma',
        p: [
          'Personal training at Hanma in Gulistan e Johar is 20,000 a month, or 51,000 a quarter with no admission fee. Mornings are with Faisal, evenings with Khubaib or Rafi, or with founder Fawad Haris by appointment. Diet plans are available with our consultant dietitian, Arooba Nawaz.',
          'Your first session is free, so you can judge the coaching before you pay.',
        ],
      },
    ],
    related: [{ href: '/services/personal-training', label: 'Personal training at Hanma' }, { href: '/pricing', label: 'See prices' }],
  },
  {
    slug: 'female-gym-evening-gulistan-e-johar',
    title: 'Female Gym in Gulistan e Johar After Work: Evening Options',
    seoTitle: 'Female Gym in Gulistan e Johar in the Evening (2026)',
    description: 'Can women train in Gulistan e Johar after work? Evening options at Hanma: a women only class 5 to 6 pm and a female coach on the floor 6 to 8 pm.',
    lede: 'Most ladies timings in Johar end in the afternoon, which does not help if you work or study until 5. Here is what to look for in an evening gym, and how women train at Hanma after work.',
    published: '2026-11-02',
    sections: [
      {
        h: 'Why evening timings matter',
        p: [
          'Many ladies gyms in Gulistan e Johar (also spelled Gulistan e Jauhar) run women only hours in the morning or early afternoon. If you work, study or look after children until the evening, those hours are hard to keep.',
          'The usual choice after 5 pm is a coed floor with no female staff. Before joining any gym for the evening, ask who coaches at your time and whether a woman is on the floor.',
        ],
      },
      {
        h: 'Women only class, 5 to 6 pm',
        p: [
          'At Hanma, Samina runs a women only aerobics class from 5 to 6 pm, Monday to Friday, in a separate class room. The main floor stays coed, but the class room is women only for that hour.',
        ],
      },
      {
        h: 'A female coach on the floor, 6 to 8 pm',
        p: [
          'From 6 to 8 pm, Monday to Friday, Urooj Shehyr, a Level 2 certified coach, is on the main floor. She coaches women on strength training, form and their own plan, so you are not left to figure out the machines alone.',
        ],
        list: [
          '5 to 6 pm: women only aerobics class with Samina, separate class room',
          '6 to 8 pm: Urooj, female coach, on the main floor',
          '1 to 5 pm: the whole studio is women only, for days you can come earlier',
        ],
      },
      {
        h: 'Questions to ask any gym about evening training',
        p: ['Whichever gym you choose, these questions tell you quickly whether the evening will work for you.'],
        list: [
          'Is a female coach or staff member present at my time?',
          'Is there a separate room or class for women in the evening?',
          'How busy is the floor at 7 pm? Visit at that hour before paying.',
          'Can I switch to women only hours on days I finish early?',
          'Is there an admission fee, and does a quarterly plan waive it?',
        ],
      },
      {
        h: 'Try an evening session free',
        p: [
          'Your first session at Hanma is free. Come at the time you would actually train, meet Urooj or Samina, and decide after. Hanma is on Manzoor Street, Gulistan e Johar.',
        ],
      },
    ],
    related: [{ href: '/services/women-only', label: 'Women only sessions, and Urooj on why women should lift' }, { href: '/pricing', label: 'See prices' }],
  },
];
