import type { FeatureCardData, TestimonialData, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", tooltip: "You are HERE!!" },
  { label: "Features", href: "#features", tooltip: "See what the MAGIC can do!!" },
  { label: "Pricing", href: "#pricing", tooltip: "It's basically free (it's not free)" },
  { label: "About Us", href: "#about", tooltip: "We are real humans" },
  { label: "Sign the Guestbook!", href: "#guestbook", tooltip: "Please... we're so lonely", blink: true },
];

export const featureCards: FeatureCardData[] = [
  {
    id: 1,
    title: "Lesson Plan Generator",
    icon: "📜",
    description:
      "Just type 'mitosis' and watch as our AI produces a 45-minute lesson plan, three worksheets, a quiz, AND an inappropriate tangent about cell phones. Edit as needed.",
    headerColor: "#000080",
    isNew: true,
  },
  {
    id: 2,
    title: "Auto-Grader 3000™",
    icon: "✅",
    description:
      "Upload your students' essays and receive scores in SECONDS. May occasionally award an A+ to a paragraph that is technically just the word 'therefore' repeated 400 times. We consider this a feature.",
    headerColor: "#800000",
    badgeText: "HOT!",
  },
  {
    id: 3,
    title: "Parent Email Composer",
    icon: "📧",
    description:
      "Select from moods: Concerned, Gently Concerned, DEFCON 1 Concerned, or Surprisingly Positive. The AI writes the email. You take all the credit. We won't tell.",
    headerColor: "#008080",
    badgeText: "WOW!",
  },
  {
    id: 4,
    title: "Sub Plan Builder",
    icon: "📋",
    description:
      "Creates a full-day sub plan including 'educational movie' justifications your admin will definitely believe. 'The Lion King IS a unit on African ecology, technically.'",
    headerColor: "#800080",
    isNew: true,
  },
  {
    id: 5,
    title: "Rubric Randomizer",
    icon: "📏",
    description:
      "Generates detailed rubrics with criteria like 'Voice,' 'Effort,' and 'Vibes' that mean absolutely nothing but make parents feel the grading was very scientific indeed.",
    headerColor: "#804000",
  },
  {
    id: 6,
    title: "IEP Accommodations Assistant",
    icon: "💼",
    description:
      "Suggests sensible accommodations and reminds you for the 47th time that yes, Jamie DOES get extra time. That last part is free. You're welcome.",
    headerColor: "#006400",
  },
];

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Mrs. Patterson",
    location: "4th Grade Teacher, Akron, Ohio",
    quote:
      "Before Magic Teacher I spent every Sunday crying over lesson plans. Now I only cry on Sundays for personal reasons. 5 stars!!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Kowalski",
    location: "High School History, Trenton, New Jersey",
    quote:
      "The AI graded my students' Civil War essays faster than I could find my red pen. Several answers were wrong but frankly so were the ones I would have given. Highly recommend.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ms. Nguyen",
    location: "Middle School Science, Austin, Texas",
    quote:
      "I used the Parent Email Composer to write about a student who dissected a Chromebook. The AI nailed the tone. The parent replied 'lol sounds right.' Ten out of ten.",
    rating: 5,
  },
];

export const awards = [
  { label: "Cool Site of the Day 1997", emoji: "🏆" },
  { label: "Netscape NOW! Certified", emoji: "🌐" },
  { label: "Best Education Site (We Voted Ourselves)", emoji: "⭐" },
  { label: "Y2K Compliant", emoji: "💾" },
];
