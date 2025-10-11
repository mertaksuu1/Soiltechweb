import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Instagram, Linkedin, Facebook } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function SocialButton() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/soiltech", 
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/soiltech", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/soiltech", 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      icon: SiWhatsapp, 
      href: "https://wa.me/905XXXXXXXXX", 
      label: "WhatsApp",
      color: "hover:text-green-600"
    },
  ];

  return (
    <div className="relative" ref={popoverRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2 bg-background/60 backdrop-blur-md border-border/50 hover:bg-background/80 hover:scale-105 transition-all"
        data-testid="button-social"
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Sosyal</span>
      </Button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 z-50 bg-popover/95 backdrop-blur-xl border border-popover-border rounded-xl shadow-xl p-3 min-w-[200px] animate-in fade-in slide-in-from-top-2"
          data-testid="social-popover"
        >
          <div className="grid grid-cols-4 gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center h-11 w-11 rounded-full border border-border bg-background/50 hover:bg-background transition-all hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
