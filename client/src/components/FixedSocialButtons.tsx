import { Instagram, Linkedin, Facebook } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function FixedSocialButtons() {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/soiltech_muhendislik?igsh=MWZzajA5bDl5dTdpaw==", 
      label: "Instagram",
      color: "hover:bg-pink-600 hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/soiltech-m%C3%BChendislik/", 
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1FzMuN9GmJ/?mibextid=wwXIfr", 
      label: "Facebook",
      color: "hover:bg-blue-500 hover:text-white"
    },
    { 
      icon: SiWhatsapp, 
      href: "https://wa.me/905326426899", 
      label: "WhatsApp",
      color: "hover:bg-green-600 hover:text-white"
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            data-testid={`fixed-social-${social.label.toLowerCase()}`}
          >
            <Button
              size="icon"
              variant="outline"
              className={`h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border-border/50 transition-all ${social.color}`}
            >
              <Icon className="h-5 w-5" />
            </Button>
          </a>
        );
      })}
    </div>
  );
}
