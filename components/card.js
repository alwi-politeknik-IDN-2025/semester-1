export const cardUI = (project, i) => {
  return `
          <div class="opacity-0 animate-slide-up animate-delay-${(i + 1) * 100}">
            <div class="project-card relative overflow-hidden gradient-card border rounded-xl card-shadow" 
                 style="border-color: hsl(240 3.7% 15.9% / 0.5)">
              <div class="card-gradient absolute inset-0 gradient-html"></div>
    
              <div class="relative p-6 sm:h-56 flex flex-col justify-between">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div>
                      <h3 class="project-title font-semibold text-lg transition-colors" style="color: hsl(0 0% 98%)">
                        ${project.title}
                      </h3>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="text-xs font-semibold px-2 py-1 rounded bg-emerald-300 text-emerald-900">
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
    
                <p class="text-sm leading-relaxed" style="color: hsl(240 5% 64.9%)">${
                  project.desc
                }</p>
    
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
