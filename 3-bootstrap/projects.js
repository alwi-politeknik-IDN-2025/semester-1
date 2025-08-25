import { cardUI } from "../components/card.js";

const projects = [
  {
    title: "Portfolio Website",
    emoji: "🅱️",
    desc: "Introduction to Bootstrap framework with responsive grid system and component library.",
    tag: "Mini Project 1",
    lesson: "Introduction & Bootstrap Setup",
    link: "/semester-1/3-bootstrap/mini-project-1/index.html",
  },
  {
    title: "Random Foto Generator",
    emoji: "🅱️",
    desc: "Advanced Bootstrap components and customization techniques for professional web development.",
    tag: "Mini Project 2",
    lesson: "Grid System & Layout",
    link: "/semester-1/3-bootstrap/mini-project-2/index.html",
  },
  {
    title: "Biodata Page",
    emoji: "🅱️",
    desc: "Complex Bootstrap layouts with custom themes and advanced component configurations.",
    tag: "Mini Project 3",
    lesson: "Basic Component",
    link: "/semester-1/3-bootstrap/mini-project-3/index.html",
  },
  {
    title: "Laracamp Landing page",
    emoji: "🅱️",
    desc: "Pixel-perfect conversion from design mockups to responsive Bootstrap layouts.",
    tag: "Slicing Project",
    lesson: "-",
    link: "/semester-1/3-bootstrap/slicing/index.html",
  },
];

// Ambil container
const container = document.getElementById("projects");

// Render otomatis
projects.map((project, idx) => {
  container.innerHTML += cardUI(project, idx);
});
