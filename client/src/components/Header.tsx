import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import soiltechLogo from "@assets/SOILTECH_page-0001_1760196613851.jpg";

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export function Header({ activeSection = "anasayfa", onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "anasayfa", label: "Ana Sayfa" },
    { id: "hakkimizda", label: "Hakkımızda" },
    { id: "hizmetler", label: "Hizmetler" },
    { id: "kalite", label: "Kalite" },
    { id: "referanslar", label: "Referanslar" },
    { id: "iletisim", label: "İletişim" },
  ];

  const handleClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate?.(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/85 backdrop-blur-sm"
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            onClick={() => handleClick("anasayfa")}
            className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 transition-all"
            data-testid="button-logo"
          >
            <img 
              src={soiltechLogo} 
              alt="SOILTECH Mühendislik" 
              className="h-16 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:block" aria-label="Ana menü">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Button
                    variant={activeSection === item.id ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => handleClick(item.id)}
                    className="font-semibold"
                    data-testid={`nav-${item.id}`}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  onClick={() => handleClick(item.id)}
                  className="justify-start font-semibold"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
