import Hero from './components/Hero.jsx';
import SplitSection from './components/SplitSection.jsx';
import ServiceSection from './components/ServiceSection.jsx';
import OfficeSection from './components/OfficeSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import ProfessionalBackground from './components/ProfessionalBackground.jsx';
import GetStartedSection from './components/GetStartedSection.jsx';
import { sections } from './data/section.js';
import AboutSection from './components/AboutSection.jsx';

export default function Home() {
  const mid = Math.ceil(sections.length / 2);
  return (
    <>
      <Hero />

      {sections.slice(0, mid).map((section, index) => (
        <SplitSection key={index} {...section} />
      ))}

      <ServiceSection />

      {sections.slice(mid).map((section, index) => (
        <SplitSection key={mid + index} {...section} />
      ))}
      <AboutSection />

      <OfficeSection />
      <FAQSection />
      <ProfessionalBackground />
      <GetStartedSection />
    </>
  );
}
