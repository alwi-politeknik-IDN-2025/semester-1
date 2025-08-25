import { cardUI } from "../components/card.js";

const projects = [
  {
    title: "Foundational Project",
    emoji: "🎨",
    desc: "A foundational HTML and CSS project showcasing core web development skills and responsive design principles.",
    tag: "Mini Project 1",
    lesson: "Introduction",
    link: "/semester-1/1-html-&-css/mini-project-1/index.html",
  },
  {
    title: "Profile Page",
    emoji: "🎨",
    desc: "A personal profile page built with semantic HTML layout, featuring a clean structure with header, navigation, main content, and footer.",
    tag: "Mini Project 2",
    lesson: "Layout Structure & Semantic HTML",
    link: "/semester-1/1-html-&-css/mini-project-2/index.html",
  },
  {
    title: "Contact me Page",
    emoji: "🎨",
    desc: "A simple contact page containing a user input form (name, email, and message) along with a structured table displaying education and experience history.",
    tag: "Mini Project 3",
    lesson: "Form + Table",
    link: "/semester-1/1-html-&-css/mini-project-3/index.html",
  },
  {
    title: "Styled Biodata Page",
    emoji: "🎨",
    desc: "A personal profile page enhanced with basic CSS styling techniques, demonstrating the use of colors, backgrounds, and text formatting for a cleaner layout.",
    tag: "Mini Project 4",
    lesson: "Basic CSS & Styling Page",
    link: "/semester-1/1-html-&-css/mini-project-4/index.html",
  },
  {
    title: "Gallery Page",
    emoji: "🎨",
    desc: "A simple gallery website built using the CSS box model and flexbox layout, showcasing multiple images aligned with descriptions underneath.",
    tag: "Mini Project 5",
    lesson: "Box Model + Layouting with Flexbox",
    link: "/semester-1/1-html-&-css/mini-project-5/index.html",
  },
  {
    title: "AI SaaS Landing Page",
    emoji: "🎨",
    desc: "A responsive one-page landing site for an AI SaaS product, featuring sections like Hero, Features, Gallery, and Contact, designed using media queries and flexible layouts.",
    tag: "Mini Project 6",
    lesson: "Responsive Design + Media Queries",
    link: "/semester-1/1-html-&-css/mini-project-6/index.html",
  },
  {
    title: "Online Courses",
    emoji: "🎨",
    desc: "Comprehensive weekly assignment demonstrating advanced HTML/CSS techniques and modern layout methods.",
    tag: "Weekly project",
    lesson: "Summaries",
    link: "/semester-1/1-html-&-css/weekly-project/index.html",
  },
];

// Ambil container
const container = document.getElementById("projects");

// Render otomatis
projects.map((project, idx) => {
  container.innerHTML += cardUI(project, idx);
});
