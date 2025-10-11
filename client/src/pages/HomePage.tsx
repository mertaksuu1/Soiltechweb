import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SpecialApplicationsSection } from "@/components/SpecialApplicationsSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

import slide1 from "@assets/stock_images/modern_building_exte_4d91d828.jpg";
import slide2 from "@assets/stock_images/professional_interio_31d5920b.jpg";
import slide3 from "@assets/stock_images/thermal_insulation_i_fefab6df.jpg";
import slide4 from "@assets/stock_images/modern_building_exte_32e322e8.jpg";
import slide5 from "@assets/stock_images/professional_interio_abe70ae2.jpg";
import slide6 from "@assets/stock_images/thermal_insulation_i_d9cfa691.jpg";
import slide7 from "@assets/stock_images/modern_building_exte_bdc431b9.jpg";

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
    handleNavigate("ozel-uygulamalar");
  };

  const handleSecondaryAction = () => {
    handleNavigate("iletisim");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["anasayfa", "hakkimizda", "hizmetler", "ozel-uygulamalar", "referanslar", "iletisim"];
      
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
        <div id="anasayfa" className="container mx-auto px-4 md:px-6 lg:px-8 py-8 scroll-mt-20">
          <HeroSlider
            images={sliderImages}
            onPrimaryAction={handlePrimaryAction}
            onSecondaryAction={handleSecondaryAction}
          />
        </div>
        
        <AboutSection />
        <ServicesSection />
        <SpecialApplicationsSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
