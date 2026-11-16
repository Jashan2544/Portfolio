import React from "react";

export default function ActivitiesAndInterests() {
  const SPOTIFY_ARTIST_ID = "6cCr6gGo7MXD8QIRiXnu7Q";

  return (
    <section id="music" className="py-16 bg-cream border-t border-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* TOP ROW: Language Section */}
        <div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-charcoal mb-8 tracking-tight">
            Language
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal">English</h3>
              <p className="text-sm text-charcoal/70 font-medium mt-1">Fluent / Professional</p>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal">Hindi</h3>
              <p className="text-sm text-charcoal/70 font-medium mt-1">Native</p>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal">Punjabi</h3>
              <p className="text-sm text-charcoal/70 font-medium mt-1">Native</p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Activities & Hobbies/Interests (Matching Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Activities Left */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-charcoal mb-8 tracking-tight">
              Activities
            </h2>

            <div className="relative pl-7 border-l-2 border-charcoal/20 space-y-8">
              <div className="relative">
                <span className="absolute -left-[35px] top-0 text-terracotta text-2xl font-black bg-cream px-1">
                  ✦
                </span>
                <span className="font-display font-black text-2xl text-charcoal block">
                  2026
                </span>
                <h3 className="font-bold text-base text-charcoal">
                  Autonomous CI/CD Deployment
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                  Engineered stateful AI-driven vulnerability remediation pipeline with LangGraph, Docker, and Prometheus.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[35px] top-0 text-terracotta text-2xl font-black bg-cream px-1">
                  ✦
                </span>
                <span className="font-display font-black text-2xl text-charcoal block">
                  2025
                </span>
                <h3 className="font-bold text-base text-charcoal">
                  Go Sandbox Execution Engine
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                  Architected multi-language microservice backend with Redis queues and isolated Docker sandboxes.
                </p>
              </div>
            </div>
          </div>

          {/* Hobbies & Interests Right (Yellow Icons from Image 1 + Spotify Integration) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-charcoal mb-8 tracking-tight">
              Hobbies &amp; Interests
            </h2>

            {/* 4 Icon Pillars matching the reference graphic icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-mustard/20 flex items-center justify-center text-mustard text-3xl mb-3 shadow-sm">
                  🎵
                </div>
                <h4 className="font-display font-bold text-sm text-charcoal">Music Artist</h4>
                <p className="text-xs text-charcoal/70 mt-0.5">Spotify verified</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-mustard/20 flex items-center justify-center text-mustard text-3xl mb-3 shadow-sm">
                  🎧
                </div>
                <h4 className="font-display font-bold text-sm text-charcoal">Production</h4>
                <p className="text-xs text-charcoal/70 mt-0.5">Sound &amp; Lyrics</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-mustard/20 flex items-center justify-center text-mustard text-3xl mb-3 shadow-sm">
                  ☁️
                </div>
                <h4 className="font-display font-bold text-sm text-charcoal">Cloud &amp; SRE</h4>
                <p className="text-xs text-charcoal/70 mt-0.5">Open Source</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-mustard/20 flex items-center justify-center text-mustard text-3xl mb-3 shadow-sm">
                  🐾
                </div>
                <h4 className="font-display font-bold text-sm text-charcoal">Pet lover</h4>
                <p className="text-xs text-charcoal/70 mt-0.5">Dog, dog &amp; cat</p>
              </div>
            </div>

            {/* Spotify Player Box customized to match Warm Retro Aesthetic */}
            <div className="mt-8 bg-forest text-cream rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-mustard">
                    Official Spotify Artist
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-cream mt-0.5">
                    Jashanpreet Singh
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/80 mt-1">
                    Listen to my tracks and musical collaborations on Spotify.
                  </p>
                </div>
                <a
                  href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mustard hover:bg-mustard-hover text-charcoal text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-transform active:scale-95 shadow-md flex items-center gap-2 shrink-0"
                >
                  <span>Open Spotify</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Spotify Embed Player */}
              <div className="w-full rounded-2xl overflow-hidden bg-forest-dark border border-cream/10 shadow-2xl">
                <iframe
                  style={{ borderRadius: "16px" }}
                  src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Jashanpreet Singh Spotify Embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR (Matching the Black bar with Like button from Image 1) */}
      <footer id="contact" className="mt-20 bg-charcoal text-cream py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
          {/* Blue Like Button / CV 2026 Pill */}
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg -mt-16 border-4 border-cream hover:scale-110 transition-transform cursor-pointer">
            👍
          </div>

          <div className="font-display font-extrabold text-2xl sm:text-3xl tracking-wide text-cream">
            CV 2026 • Jashanpreet Singh
          </div>

          <p className="text-xs sm:text-sm text-cream/70 max-w-md">
            DevOps &amp; Backend Software Engineer • UPES Dehradun • Spotify Music Artist
          </p>

          <div className="flex items-center gap-6 pt-2 text-xs sm:text-sm text-mustard font-semibold">
            <a href="mailto:jashan04102005@gmail.com" className="hover:underline">
              Email
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/jashanpreet2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/Jashan2544"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Spotify
            </a>
          </div>

          <div className="pt-6 text-xs text-cream/40">
            © 2026 Jashanpreet Singh. Designed in retro editorial style.
          </div>
        </div>
      </footer>
    </section>
  );
}
