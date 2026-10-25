import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InnovationExperienceSlider from './components/InnovationExperienceSlider';
import AboutSection from './components/AboutSection';
import RegionalHubs from './components/RegionalHubs';
import TeamDirectory from './components/TeamDirectory';
import ResearchLinesSection from './components/ResearchLinesSection';
import PublicationsSection from './components/PublicationsSection';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';
import MemberModal from './components/MemberModal';
import ActaModal from './components/ActaModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('relise_theme');
    return saved !== null ? saved === 'dark' : true; // Default to dark mode
  });
  const [selectedCountry, setSelectedCountry] = useState('Todos');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isActaOpen, setIsActaOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('relise_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-relise-red-500 selection:text-white">
      {/* Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenActa={() => setIsActaOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero onOpenActa={() => setIsActaOpen(true)} />
        
        <InnovationExperienceSlider onOpenActa={() => setIsActaOpen(true)} />
        
        <AboutSection onOpenActa={() => setIsActaOpen(true)} />
        
        <RegionalHubs
          selectedCountry={selectedCountry}
          onSelectCountry={(country) => {
            setSelectedCountry(country);
            const elem = document.getElementById('equipo');
            if (elem) {
              elem.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        <TeamDirectory
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
          onSelectMember={(member) => setSelectedMember(member)}
        />

        <ResearchLinesSection />

        <PublicationsSection />

        <EventsSection />
      </main>

      {/* Footer */}
      <Footer onOpenActa={() => setIsActaOpen(true)} />

      {/* Modals */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <ActaModal
        isOpen={isActaOpen}
        onClose={() => setIsActaOpen(false)}
      />
    </div>
  );
}
