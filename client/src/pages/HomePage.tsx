import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { QualitySection } from "@/components/QualitySection";
import { ISOCertificatesSection } from "@/components/ISOCertificatesSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

import slide1 from "@assets/WhatsApp Image 2025-10-10 at 18.47.24_1760535575976.jpeg";
import slide2 from "@assets/WhatsApp Image 2025-10-10 at 18.47.25_1760535575977.jpeg";
import slide3 from "@assets/WhatsApp Image 2025-10-10 at 17.48.10 (1)_1760535575978.jpeg";
import slide4 from "@assets/WhatsApp Image 2025-10-10 at 18.47.19_1760535575979.jpeg";
import slide5 from "@assets/WhatsApp Image 2025-10-10 at 18.47.18 (1)_1760535575980.jpeg";
import slide6 from "@assets/WhatsApp Image 2025-10-10 at 18.47.20_1760535575981.jpeg";
import slide7 from "@assets/WhatsApp Image 2025-10-10 at 18.47.21_1760535575981.jpeg";

const sliderImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("anasayfa");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrimaryAction = () => {
    handleNavigate("hizmetler");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["anasayfa", "hakkimizda", "hizmetler", "kalite", "referanslar", "iletisim"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="anasayfa" className="scroll-mt-20">
          <HeroSlider
            images={sliderImages}
            onPrimaryAction={handlePrimaryAction}
          />
        </div>
        
        <AboutSection />
        <ServicesSection />
        <QualitySection />
        <ISOCertificatesSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
