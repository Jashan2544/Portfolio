interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "C", "Go", "TypeScript", "JavaScript"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "Docker", "Jenkins", "Terraform", "CI/CD Pipelines"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "Redis", "MongoDB"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Monitoring",
    icon: "📊",
    skills: ["Prometheus", "Grafana"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Concepts",
    icon: "🧠",
    skills: [
      "DSA",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "OOP",
      "REST APIs",
      "Containerization",
      "SDLC",
      "Agile",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="animated-border border border-card-border p-6"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <span className="text-xl" aria-hidden="true">
                    {category.icon}
                  </span>
                  <span>{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-card-bg border border-card-border rounded-full px-4 py-2 text-sm text-foreground/90 transition-colors duration-200 hover:border-accent"
                    >
                      {skill}
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
