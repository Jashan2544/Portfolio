import React from "react";

export default function ResumeSection() {
  const education = [
    {
      period: "2023–2027",
      institution: "UPES, Dehradun",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA: 7.7 / 10",
    },
    {
      period: "2022–2023",
      institution: "St. Peter's Sec. School, Chandigarh",
      degree: "12th CBSE Senior Secondary",
      score: "Score: 79.4%",
    },
    {
      period: "2020–2021",
      institution: "Kendriya Vidyalaya, Sector 31, Chandigarh",
      degree: "10th CBSE Secondary Education",
      score: "Score: 90.0%",
    },
  ];

  const softwareTiles = [
    { label: "Go", sub: "Golang" },
    { label: "Docker", sub: "Containers" },
    { label: "AWS", sub: "Cloud" },
    { label: "Terra", sub: "IaC" },
    { label: "Jenks", sub: "CI/CD" },
    { label: "Redis", sub: "Queue" },
    { label: "Prom", sub: "Metrics" },
    { label: "Graf", sub: "Grafana" },
  ];

  const experiences = [
    {
      year: "2026",
      role: "Frontend Developer Intern",
      company: "Xebia · 8 Weeks",
      details:
        "Developed the frontend of a student portal in a cross-functional agile team, integrated REST APIs with backend services, and coordinated Git workflows.",
    },
    {
      year: "2025",
      role: "Content Contributor, Remote",
      company: "Dragon Flora Farms · 8 Weeks",
      details:
        "Delivered 30+ digital content pieces across weekly deadlines, growing audience engagement by 20–30% with remote collaboration.",
    },
    {
      year: "2024",
      role: "Community Outreach Volunteer",
      company: "Aashray Foundation · 8 Weeks",
      details:
        "Led 3–5 community outreach campaigns and workshops, coordinated social programs with a 5+ member team, and produced program proposals.",
    },
  ];

  return (
    <section id="resume" className="py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid: Forest Green Left + Cream/Mustard Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-cream-dark">
          {/* LEFT PANEL: Deep Forest Green Background */}
          <div className="lg:col-span-7 bg-forest text-cream p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden">
            {/* Outline Typography Watermark behind */}
            <div
              className="absolute -right-10 top-6 select-none pointer-events-none opacity-20 text-right leading-none"
              aria-hidden="true"
            >
              <div className="text-outline-cream font-display font-black text-7xl sm:text-8xl tracking-wider">
                RESUME
              </div>
              <div className="text-outline-cream font-display font-black text-7xl sm:text-8xl tracking-wider">
                RESUME
              </div>
              <div className="text-outline-cream font-display font-black text-7xl sm:text-8xl tracking-wider">
                RESUME
              </div>
            </div>

            <div className="relative z-10 space-y-12">
              {/* Education Section */}
              <div>
                <h2 className="font-display font-black text-4xl sm:text-5xl text-mustard mb-8 tracking-tight">
                  Education
                </h2>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-mustard/40 space-y-8">
                  {education.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Terracotta/Mustard ✦ star icon node */}
                      <span className="absolute -left-[31px] sm:-left-[39px] top-0 text-terracotta text-xl sm:text-2xl font-black bg-forest px-1">
                        ✦
                      </span>

                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="font-display font-black text-xl sm:text-2xl text-cream tracking-wide">
                          {item.period}
                        </span>
                        <span className="text-sm font-semibold text-cream/90">
                          {item.institution}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-cream/70 mt-1">
                        {item.degree} • <strong className="text-mustard font-medium">{item.score}</strong>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Section */}
              <div className="pt-4">
                <h2 className="font-display font-black text-4xl sm:text-5xl text-mustard mb-8 tracking-tight">
                  Technical skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Software skills: white rounded tiles */}
                  <div>
                    <h3 className="font-display font-bold text-xl text-cream mb-4">
                      DevOps &amp; Cloud
                    </h3>
                    <div className="grid grid-cols-4 gap-2.5">
                      {softwareTiles.map((tile, i) => (
                        <div
                          key={i}
                          className="bg-white text-charcoal rounded-xl p-2.5 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform"
                          title={tile.sub}
                        >
                          <span className="font-black text-xs sm:text-sm tracking-tight text-forest">
                            {tile.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Coding skills list */}
                  <div>
                    <h3 className="font-display font-bold text-xl text-cream mb-4">
                      Coding skills
                    </h3>
                    <p className="text-xs text-cream/70 mb-2 font-medium">Core knowledge of:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm text-cream/90">
                      <div>• Python</div>
                      <div>• Go (Golang)</div>
                      <div>• C Programming</div>
                      <div>• TypeScript</div>
                      <div>• MySQL / MongoDB</div>
                      <div>• REST APIs</div>
                      <div>• Linux / Bash</div>
                      <div>• Git / GitHub</div>
                    </div>
                  </div>
                </div>

                {/* Soft pill tags below skills */}
                <div className="flex flex-wrap gap-2.5 pt-8">
                  <span className="bg-charcoal text-cream text-xs font-semibold px-4 py-2 rounded-full border border-cream/10">
                    #Containerization
                  </span>
                  <span className="bg-charcoal text-cream text-xs font-semibold px-4 py-2 rounded-full border border-cream/10">
                    #CI/CD Pipelines
                  </span>
                  <span className="bg-charcoal text-cream text-xs font-semibold px-4 py-2 rounded-full border border-cream/10">
                    #Terraform IaC
                  </span>
                  <span className="bg-charcoal text-cream text-xs font-semibold px-4 py-2 rounded-full border border-cream/10">
                    #Observability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Warm Cream / Mustard Experience Block */}
          <div className="lg:col-span-5 bg-cream p-8 sm:p-10 flex flex-col justify-between space-y-8">
            {/* Solid Mustard Yellow Experience Card */}
            <div className="bg-mustard rounded-2xl p-6 sm:p-8 shadow-xl text-charcoal relative">
              <h2 className="font-display font-black text-4xl sm:text-5xl text-charcoal mb-8 tracking-tight">
                Experience
              </h2>

              <div className="relative pl-6 sm:pl-7 border-l-2 border-charcoal/30 space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    {/* Star node */}
                    <span className="absolute -left-[30px] sm:-left-[35px] top-0 text-terracotta text-xl sm:text-2xl font-black bg-mustard px-1">
                      ✦
                    </span>

                    <span className="font-display font-black text-2xl text-charcoal block">
                      {exp.year}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-charcoal leading-tight mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-charcoal/80 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-xs text-charcoal/90 leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Black Pill Tags below Experience (Matching Image 3) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="bg-charcoal text-cream text-xs font-semibold px-5 py-2.5 rounded-full shadow-md">
                #ProblemSolving
              </span>
              <span className="bg-charcoal text-cream text-xs font-semibold px-5 py-2.5 rounded-full shadow-md">
                #Communication
              </span>
              <span className="bg-charcoal text-cream text-xs font-semibold px-5 py-2.5 rounded-full shadow-md">
                #Detail-oriented
              </span>
              <span className="bg-charcoal text-cream text-xs font-semibold px-5 py-2.5 rounded-full shadow-md">
                #Adaptability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
