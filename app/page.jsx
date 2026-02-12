import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SplitSection from './components/SplitSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import ProfessionalBackground from './components/ProfessionalBackground.jsx';
import GetStartedSection from './components/GetStartedSection.jsx';
import { sections } from './data/section.js';

export default function Home() {
  const mid = Math.ceil(sections.length / 2);
  return (
    <>
      <Navbar />

      <Hero />

      {sections.slice(0, mid).map((section, index) => (
        <SplitSection key={index} {...section} />
      ))}

      <SpecialtiesSection />

      {sections.slice(mid).map((section, index) => (
        <SplitSection key={mid + index} {...section} />
      ))}

      <AboutSection />
      <FAQSection />
      <ProfessionalBackground />
      <GetStartedSection />
    </>
  );
}
