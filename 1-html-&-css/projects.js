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
