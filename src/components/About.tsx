import React from "react";

interface HighlightCard {
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
}

const highlightCards: HighlightCard[] = [
  {
    title: "2+ Projects",
    tag: "Production Ready",
    description: "Architected containerized microservices and automated cloud infrastructure.",
    icon: (
      <svg
        className="h-5 w-5 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "3 Internships",
    tag: "Experience",
    description: "Hands-on experience developing backend systems and CI/CD pipelines.",
    icon: (
      <svg
        className="h-5 w-5 text-accent-secondary"
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
    ),
  },
  {
    title: "B.Tech CS @ UPES",
    tag: "Education (2023-2027)",
    description: "Undergraduate student at UPES Dehradun focusing on systems and cloud computing.",
    icon: (
      <svg
        className="h-5 w-5 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
        />
      </svg>
    ),
  },
  {
    title: "Music Artist",
    tag: "Spotify Verified",
    description: "Blending creative audio expression with rigorous algorithmic problem solving.",
    icon: (
      <svg
        className="h-5 w-5 text-accent-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
  },
];

const coreSkills: string[] = [
  "Go",
  "Docker",
  "AWS",
  "Terraform",
  "Jenkins",
  "Prometheus",
  "Grafana",
  "CI/CD",
  "Spotify Artist",
];

export default function About() {
  return (
    <section id="about" className="py-20 text-foreground">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with gradient accent underline */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </div>

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Compelling narrative tailored for software development */}
          <div className="space-y-6 text-muted">
            <p className="text-lg leading-relaxed text-foreground/90">
              I am <span className="font-semibold text-foreground">Jashanpreet Singh</span>, a B.Tech Computer Science student at <span className="font-medium text-accent">UPES Dehradun</span> (2023–2027) with a dedicated focus on backend engineering and DevOps. I build resilient, containerized microservices in <span className="font-medium text-foreground">Go</span> and <span className="font-medium text-foreground">Docker</span>, engineered for performance, clean concurrency, and high scalability.
            </p>
            <p className="leading-relaxed">
              My engineering workflow centers on creating seamless, automated delivery cycles. I design scalable cloud infrastructure on <span className="font-medium text-foreground">AWS</span>, configure robust CI/CD pipelines with <span className="font-medium text-foreground">Jenkins</span>, and enforce infrastructure as code using <span className="font-medium text-foreground">Terraform</span>. To maintain peak system reliability, I implement observability stacks leveraging <span className="font-medium text-foreground">Prometheus</span> and <span className="font-medium text-foreground">Grafana</span> for real-time monitoring and alerting.
            </p>
            <p className="leading-relaxed">
              Outside the terminal, I am an active music artist on <span className="font-medium text-accent-secondary">Spotify</span>. Crafting music sharpens my creative intuition and discipline—complementing my technical mindset and inspiring innovative perspectives in software design.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-card-border bg-card-bg px-3.5 py-1 text-xs font-medium text-foreground/85 transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Quick stats cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="animated-border bg-card-bg border border-card-border p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-background/60">
                    {card.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
