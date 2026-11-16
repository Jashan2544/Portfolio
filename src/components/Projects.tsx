export default function Projects() {
  const projects = [
    {
      title: "Autonomous CI/CD | AI-Driven Vulnerability Remediation",
      role: "Lead Architect & DevOps",
      tech: ["LangGraph", "FastAPI", "MongoDB", "Redis", "Docker", "Prometheus", "Grafana"],
      description:
        "Engineered an automated CI/CD platform that ingests real-time webhooks from GitHub & SonarCloud reports, synthesizes automated vulnerability patches via LLMs, and verifies each remediation in sandboxed Docker containers before merging.",
      highlights: [
        "10-stage stateful pipeline orchestrated with LangGraph & MongoDB checkpointing.",
        "Human-in-the-loop confidence score gateway with automated Redis deduplication.",
        "Secured with HMAC-verified webhooks, prompt-injection defense, and Prometheus/Grafana observability.",
      ],
      github: "https://github.com/Jashan2544",
    },
    {
      title: "Code Execution Engine",
      role: "Backend & Systems Engineer",
      tech: ["Go (Golang)", "Docker", "Redis", "TypeScript", "React.js"],
      description:
        "High-throughput multi-language code runner backend written in Go. Submissions are queued via Redis and securely executed inside isolated, ephemeral Docker sandbox containers with resource boundaries.",
      highlights: [
        "Concurrent execution sandboxing with strict CPU/memory container isolation.",
        "Redis asynchronous job queue with verification and timeout recovery.",
        "Modular REST APIs validated with Postman and benchmarked for low latency.",
      ],
      github: "https://github.com/Jashan2544",
    },
  ];

  return (
    <section id="work" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-terracotta text-3xl">✦</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-charcoal tracking-tight">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-dark shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                    {proj.role}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-forest hover:text-mustard transition-colors flex items-center gap-1"
                  >
                    GitHub ↗
                  </a>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal group-hover:text-forest transition-colors mb-4 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                  {proj.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-charcoal/70 flex items-start gap-2">
                      <span className="text-mustard font-bold text-base leading-none">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-cream-dark">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-cream text-charcoal text-xs font-semibold px-3 py-1 rounded-full border border-cream-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
