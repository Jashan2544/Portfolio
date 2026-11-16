import React from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "Xebia",
    period: "Jun 2026 – Jul 2026 · 8 Weeks",
    description:
      "Developed frontend of student portal, Agile methodology, GitHub version control, integrated with backend services.",
  },
  {
    role: "Content Contributor, Remote",
    company: "Dragon Flora Farms",
    period: "Jun 2025 – Jul 2025 · 8 Weeks",
    description:
      "30+ digital content pieces, grew engagement by 20-30%, cross-functional remote team collaboration.",
  },
  {
    role: "Community Outreach Volunteer",
    company: "Aashray Foundation",
    period: "Jun 2024 – Jul 2024 · 8 Weeks",
    description:
      "Led 3-5 outreach campaigns, coordinated with 5+ member team, produced insights for 2-3 program proposals.",
  },
];

const educations: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "UPES Dehradun",
    period: "Jul 2023 – May 2027",
    description: "CGPA: 7.7/10",
  },
  {
    degree: "12th CBSE",
    school: "St. Peter's Sec. School, Chandigarh",
    period: "2022 – 2023",
    description: "Score: 79.4%",
  },
  {
    degree: "10th CBSE",
    school: "Kendriya Vidyalaya, Sector 31, Chandigarh",
    period: "2020 – 2021",
    description: "Score: 90%",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-block">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience &amp; Education
          </h2>
          <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </div>
      </div>

      {/* Two Subsections: Side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
        {/* Experience Subsection */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">Experience</h3>
          </div>

          {/* Vertical Timeline */}
          <div className="relative space-y-8">
            {/* Gradient Line */}
            <div
              className="absolute left-3.5 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent to-accent-secondary"
              aria-hidden="true"
            />

            {experiences.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-10">
                {/* Timeline Dot */}
                <span
                  className="absolute left-3.5 sm:left-4 -translate-x-1/2 top-6 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background shadow-[0_0_10px_var(--color-accent)]"
                  aria-hidden="true"
                />

                {/* Entry Card */}
                <div className="animated-border bg-card-bg border border-card-border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground tracking-tight">
                      {item.role}
                    </h4>
                    <p className="text-sm font-medium text-accent-secondary mt-0.5">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Subsection */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">Education</h3>
          </div>

          {/* Vertical Timeline */}
          <div className="relative space-y-8">
            {/* Gradient Line */}
            <div
              className="absolute left-3.5 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent to-accent-secondary"
              aria-hidden="true"
            />

            {educations.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-10">
                {/* Timeline Dot */}
                <span
                  className="absolute left-3.5 sm:left-4 -translate-x-1/2 top-6 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background shadow-[0_0_10px_var(--color-accent)]"
                  aria-hidden="true"
                />

                {/* Entry Card */}
                <div className="animated-border bg-card-bg border border-card-border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground tracking-tight">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium text-accent-secondary mt-0.5">
                      {item.school}
                    </p>
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}