import StoreProvider from '@/components/layout/StoreProvider';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSections from '@/components/sections/ProjectsSections';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <StoreProvider>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSections />
      <ContactSection />
    </StoreProvider>
  );
}
