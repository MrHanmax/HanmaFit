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
];
