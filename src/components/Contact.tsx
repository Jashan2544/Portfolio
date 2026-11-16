import React from "react";

export default function Contact() {
  const contactCards = [
    {
      platform: "Email",
      display: "jashan04102005@gmail.com",
      href: "mailto:jashan04102005@gmail.com",
      icon: (
        <svg
          className="w-6 h-6 text-accent group-hover:text-accent-secondary transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      platform: "LinkedIn",
      display: "linkedin.com/in/jashanpreet2005",
      href: "https://linkedin.com/in/jashanpreet2005",
      icon: (
        <svg
          className="w-6 h-6 fill-accent group-hover:fill-accent-secondary transition-colors"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
        </svg>
      ),
    },
    {
      platform: "GitHub",
      display: "github.com/Jashan2544",
      href: "https://github.com/Jashan2544",
      icon: (
        <svg
          className="w-6 h-6 fill-accent group-hover:fill-accent-secondary transition-colors"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        {/* Heading with gradient underline */}
        <div className="inline-flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 sm:w-24 mt-3 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-muted max-w-xl mx-auto">
          {"Have an idea or want to collaborate? Let's connect."}
        </p>

        {/* Contact cards */}
        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <div
              key={card.platform}
              className="animated-border group p-6 sm:p-8 flex flex-col items-center justify-center text-center border border-card-border hover:border-transparent transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-card-border/50 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {card.platform}
              </h3>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-muted hover:text-accent transition-colors break-all after:absolute after:inset-0"
              >
                {card.display}
              </a>
            </div>
          ))}
        </div>

        {/* Prominent Email CTA Button */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4">
          <a
            href="mailto:jashan04102005@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-accent hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:scale-105 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Send an Email</span>
          </a>
          <p className="text-sm text-muted">
            Prefer a call?{" "}
            <a
              href="tel:+919041364959"
              className="text-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              +91 9041364959
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-card-border/60 text-center text-sm text-muted">
        <p>© 2026 Jashanpreet Singh. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </section>
  );
}
