
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Publications from "@/components/Publications";
import GoogleScholar from "@/components/GoogleScholar";
import SocialLinks from "@/components/SocialLinks";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <div data-section="timeline">
        <Timeline />
      </div>
      <Publications />
      <GoogleScholar />
      <SocialLinks />
    </div>
  );
};

export default Index;
