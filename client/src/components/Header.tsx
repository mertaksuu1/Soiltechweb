import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link, useLocation } from "wouter";
import soiltechLogo from "@assets/soiltech-logo_1760198889433.webp";

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export function Header({ activeSection = "anasayfa", onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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

  const isHomePage = location === "/";

  const handleClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isHomePage && onNavigate) {
      onNavigate(id);
    }
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/soiltech_muhendislik?igsh=MWZzajA5bDl5dTdpaw==", 
      label: "Instagram"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/soiltech-m%C3%BChendislik/", 
      label: "LinkedIn"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1FzMuN9GmJ/?mibextid=wwXIfr", 
      label: "Facebook"
    },
    { 
      icon: SiWhatsapp, 
      href: "https://wa.me/905326426899", 
      label: "WhatsApp"
    },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700 shadow-lg"
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/">
            <button
              onClick={() => handleClick("anasayfa")}
              className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 transition-all"
              data-testid="button-logo"
            >
              <img 
                src={soiltechLogo} 
                alt="SOILTECH Mühendislik" 
                className="h-12 w-auto object-contain"
              />
            </button>
          </Link>

          <nav className="hidden lg:block" aria-label="Ana menü">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {isHomePage ? (
                    <Button
                      variant={activeSection === item.id ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => handleClick(item.id)}
                      className="font-semibold text-white hover:text-white"
                      data-testid={`nav-${item.id}`}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Link href={`/#${item.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-semibold text-white hover:text-white"
                        data-testid={`nav-${item.id}`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-testid={`header-social-${social.label.toLowerCase()}`}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 text-white hover:text-primary hover:bg-slate-800"
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  </a>
                );
              })}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-700 py-4 lg:hidden" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                isHomePage ? (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "secondary" : "ghost"}
                    onClick={() => handleClick(item.id)}
                    className="justify-start font-semibold text-white"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link key={item.id} href={`/#${item.id}`}>
                    <Button
                      variant="ghost"
                      onClick={() => setMobileMenuOpen(false)}
                      className="justify-start font-semibold w-full text-white"
                      data-testid={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )
              ))}
            </nav>
            
            <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-700">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-testid={`mobile-social-${social.label.toLowerCase()}`}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 text-white hover:text-primary hover:bg-slate-800"
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
