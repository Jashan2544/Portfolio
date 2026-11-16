import React from "react";

/**
 * Music / Spotify Artist Section (Server Component)
 *
 * NOTE FOR USER:
 * Replace 'YOUR_SPOTIFY_ARTIST_ID' with your actual Spotify artist ID.
 * You can find your artist ID by navigating to your Spotify artist page,
 * clicking "Share", and copying the link (e.g. https://open.spotify.com/artist/<YOUR_ARTIST_ID>).
 */
const SPOTIFY_ARTIST_ID = "YOUR_SPOTIFY_ARTIST_ID";
const SPOTIFY_PROFILE_URL = `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`;

export default function Music() {
  return (
    <section id="music" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card-bg/60 text-xs sm:text-sm font-medium text-accent-secondary mb-4 backdrop-blur-sm">
          <span>🎧</span>
          <span>Creative Side</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          <span className="gradient-text">Beyond Code</span>
        </h2>
        <p className="text-lg sm:text-xl font-medium gradient-text">
          Music Artist on Spotify
        </p>
      </div>

      {/* Dark Card with animated-border */}
      <div className="animated-border relative rounded-2xl bg-card-bg border border-card-border p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden">
        {/* Glow & Decorative Background Accents */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-secondary/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Artist Information & Profile Link */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Music-Themed Decorative Icons */}
            <div className="flex items-center gap-3 text-2xl" aria-label="Music icons">
              <span className="p-3 rounded-xl bg-background/80 border border-card-border shadow-sm transform hover:scale-110 transition-transform">
                🎵
              </span>
              <span className="p-3 rounded-xl bg-background/80 border border-card-border shadow-sm transform hover:scale-110 transition-transform">
                🎧
              </span>
              <span className="p-3 rounded-xl bg-background/80 border border-card-border shadow-sm transform hover:scale-110 transition-transform">
                🎤
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-accent-secondary">
                Spotify Artist
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                Jashanpreet Singh
              </h3>
            </div>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-md">
              When I&apos;m not writing code, I&apos;m creating music. Check out my tracks on Spotify.
            </p>

            {/* Link to Spotify Profile */}
            <div className="pt-2">
              <a
                href={SPOTIFY_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#1DB954]/25"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.307c-.22.355-.685.47-1.04.25-2.855-1.745-6.448-2.14-10.68-1.173-.404.093-.812-.162-.905-.567-.094-.403.16-.811.566-.904 4.636-1.06 8.59-.613 11.808 1.354.356.218.47.684.251 1.04zm1.472-3.272c-.276.448-.868.591-1.316.315-3.268-2.008-8.25-2.59-12.116-1.416-.502.152-1.033-.135-1.186-.636-.152-.501.135-1.033.637-1.186 4.417-1.34 9.91-.7 13.666 1.61.448.275.592.866.315 1.313zm.126-3.41c-3.918-2.327-10.375-2.542-14.11-1.408-.6.182-1.237-.162-1.42-.763-.182-.6.163-1.237.763-1.42 4.29-1.302 11.417-1.047 15.932 1.634.54.32.716 1.02.395 1.56-.32.539-1.02.715-1.56.397z" />
                </svg>
                Listen on Spotify
              </a>
            </div>
          </div>

          {/* Spotify Player Embed */}
          <div className="lg:col-span-7 w-full">
            {/*
              NOTE: Replace YOUR_SPOTIFY_ARTIST_ID with your actual Spotify artist ID
              in the src URL below or in the SPOTIFY_ARTIST_ID constant above.
            */}
            <iframe
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Artist Embed - Jashanpreet Singh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
