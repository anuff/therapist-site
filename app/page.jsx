import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SplitSection from './components/SplitSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import ProfessionalBackground from './components/ProfessionalBackground.jsx';
import GetStartedSection from './components/GetStartedSection.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SplitSection
        title="Live a fulfilling life."
        description="Life can be challenging—especially when you're trying to balance your personal and professional life. It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help."
        imageSrc="/image1.jpg"
        buttonText="GET IN TOUCH →"
      />
      <SpecialtiesSection />
      <SplitSection
        title="You don’t have to do this all alone."
        description="If you are facing any of these, there’s hope:

Persistent feelings of sadness or hopelessness

Trouble focusing or making decisions

Difficulty maintaining relationships

Feeling constantly exhausted or unmotivated

A pervasive sense of being overwhelmed

With empathy and guidance, we'll work together to navigate the challenges life throws your way."
        imageSrc="/image2.jpg"
        buttonText="WORK WITH ME →"
        reverse={true}
      />
      <AboutSection />
      <FAQSection />
      <ProfessionalBackground />
      <GetStartedSection />
    </>
  );
}
