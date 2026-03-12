import Header from "@/components/Header";
import LeadStory from "@/components/LeadStory";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <LeadStory />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
