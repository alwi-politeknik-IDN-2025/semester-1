// ACCORDITION LOGIC START
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset semua tab
    tabBtns.forEach((b) => b.classList.remove("text-indigo-600", "border-indigo-600"));
    tabContents.forEach((c) => c.classList.add("hidden"));

    // Aktifkan tab yang diklik
    btn.classList.add("text-indigo-600", "border-indigo-600");
    document.getElementById("tab-" + btn.dataset.tab).classList.remove("hidden");
  });
});

// Set default tab aktif
tabBtns[0].click();
// ACCORDITION LOGIC END

const projects = [
  [
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
  ],
  [
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
  ],
  [
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
  ],
];

// Ambil container
const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");

const cardUI = (project, i) => {
  return `
      <div class="opacity-0 animate-slide-up animate-delay-${(i + 1) * 100}">
        <div class="project-card relative overflow-hidden gradient-card border rounded-xl card-shadow" 
             style="border-color: hsl(240 3.7% 15.9% / 0.5)">
          <div class="card-gradient absolute inset-0 gradient-html"></div>

          <div class="relative p-6 sm:h-56 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="text-2xl">${project.emoji}</div>
                <div>
                  <h3 class="project-title font-semibold text-lg transition-colors" style="color: hsl(0 0% 98%)">
                    ${project.title}
                  </h3>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-xs px-2 py-1 rounded"
                          style="background-color: hsl(240 3.7% 15.9%); color: hsl(0 0% 98%)">
                      ${project.tag}
                    </span>
                  </div>
                </div>
              </div>
              <svg class="project-icon h-5 w-5 transition-colors" style="color: hsl(240 5% 64.9%)" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
              </svg>
            </div>

            <p class="text-sm leading-relaxed" style="color: hsl(240 5% 64.9%)">${project.desc}</p>

            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center gap-2 text-xs" style="color: hsl(240 5% 64.9%)">
                📙 ${project.lesson}
              </div>
              <a href="${project.link}" target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center gap-2 text-sm font-medium transition-colors" 
                 style="color: hsl(346 77% 49.8%)">
                View Project
                <svg class="external-link h-3 w-3 transition-transform" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
};

// Render otomatis
projects.map((projectGroup, idx) => {
  if (idx == 0) {
    projectGroup.forEach((project, i) => {
      tab1.innerHTML += cardUI(project, i);
    });
  } else if (idx == 1) {
    projectGroup.forEach((project, i) => {
      tab2.innerHTML += cardUI(project, i);
    });
  } else if (idx == 2) {
    projectGroup.forEach((project, i) => {
      tab3.innerHTML += cardUI(project, i);
    });
  }
});
