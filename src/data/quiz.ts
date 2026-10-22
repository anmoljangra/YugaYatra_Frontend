export const quizQuestions = [
  {
    id: 1,
    question: "Which of these excites you most?",
    options: [
      { text: "Building websites and web apps", track: "web-development" },
      { text: "Solving complex technical problems", track: "software-engineering" },
      { text: "Creating apps people use on their phones", track: "app-development" },
      { text: "Growing brands and reaching audiences", track: "digital-marketing" },
    ],
  },
  {
    id: 2,
    question: "What best describes your current skill level?",
    options: [
      { text: "I know HTML/CSS and some JavaScript", track: "web-development" },
      { text: "I enjoy logic puzzles and algorithms", track: "software-engineering" },
      { text: "I use mobile apps constantly and love UX", track: "app-development" },
      { text: "I'm great at communication and creativity", track: "digital-marketing" },
    ],
  },
  {
    id: 3,
    question: "What kind of project would you love to build?",
    options: [
      { text: "A full-featured e-commerce website", track: "web-development" },
      { text: "A backend API powering multiple services", track: "software-engineering" },
      { text: "An app available on the Play Store", track: "app-development" },
      { text: "A viral social media campaign", track: "digital-marketing" },
    ],
  },
  {
    id: 4,
    question: "Which career outcome excites you most?",
    options: [
      { text: "Full-stack developer at a tech company", track: "web-development" },
      { text: "Software engineer at a product company", track: "software-engineering" },
      { text: "Mobile app developer building the next big app", track: "app-development" },
      { text: "Digital marketing manager for a growing brand", track: "digital-marketing" },
    ],
  },
];

export const quizResults: Record<string, { title: string; description: string }> = {
  "web-development": {
    title: "Web Development",
    description: "You're a natural builder! Your interest in creating interactive web experiences makes the Web Development internship a perfect fit. You'll work on live production code, master React and Node.js, and deploy real applications used by actual users.",
  },
  "software-engineering": {
    title: "Software Engineering",
    description: "You think like an engineer! Your love for problem-solving and technical depth makes the Software Engineering internship ideal. You'll tackle real architectural challenges, participate in sprint planning, and build your foundations for a career at top tech companies.",
  },
  "app-development": {
    title: "App Development",
    description: "You're a mobile-first thinker! Your passion for apps and user experience makes App Development your calling. You'll build cross-platform apps, publish to the Play Store, and work alongside experienced mobile engineers on real products.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "You're a creative strategist! Your communication skills and brand instincts make Digital Marketing your ideal path. You'll manage real campaigns, work with paid advertising budgets, and build a portfolio with actual performance data.",
  },
};
