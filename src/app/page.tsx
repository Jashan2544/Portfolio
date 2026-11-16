import Hero from "@/components/Hero";
import ResumeSection from "@/components/ResumeSection";
import Projects from "@/components/Projects";
import ActivitiesAndInterests from "@/components/ActivitiesAndInterests";

export default function Page() {
  return (
    <main className="w-full bg-cream min-h-screen">
      <Hero />
      <ResumeSection />
      <Projects />
      <ActivitiesAndInterests />
    </main>
  );
}
