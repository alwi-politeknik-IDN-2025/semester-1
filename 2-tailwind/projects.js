import { cardUI } from "../components/card.js";

const projects = [
  {
    title: "Mouse Landing Page",
    emoji: "🌊",
    desc: "Modern component-based design using Tailwind CSS utility classes for rapid UI development.",
    tag: "Mini Project 5",
    lesson: "Modern UI Component",
    link: "/semester-1/2-tailwind/mini-project-5/src/index.html",
  },
  {
    title: "Fully Responsive Landing Page",
    emoji: "🌊",
    desc: "Full-scale weekly project leveraging Tailwind's powerful utility system for complex layouts.",
    tag: "Weekly Project",
    lesson: "Summaries",
    link: "/semester-1/2-tailwind/weekly-project/index.html",
  },
];

// Ambil container
const container = document.getElementById("projects");

// Render otomatis
projects.map((project, idx) => {
  container.innerHTML += cardUI(project, idx);
});
