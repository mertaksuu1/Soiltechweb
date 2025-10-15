import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

import serviceImage1 from "@assets/WhatsApp Image 2025-10-10 at 18.47.22_1760535575982.jpeg";
import serviceImage2 from "@assets/WhatsApp Image 2025-10-10 at 18.47.23 (1)_1760535575983.jpeg";
import serviceImage3 from "@assets/WhatsApp Image 2025-10-10 at 18.47.24 (1)_1760535575984.jpeg";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3" data-testid={`service-title-${title}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 min-h-[3rem]" data-testid={`service-description-${title}`}>
          {description}
        </p>
        <Link href={link}>
          <Button
            variant="ghost"
            className="gap-2 p-0 h-auto hover:gap-3 transition-all"
            data-testid={`button-service-${title}`}
          >
            Detayları Gör
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Kumlama Boyama Atölyesi",
      description: "Modern atölyemizde profesyonel kumlama ve boyama hizmetleri sunuyoruz.",
      image: serviceImage1,
      link: "/kumlama-boyama"
    },
    {
      title: "Endüstriyel Hizmetler",
      description: "Geniş kapsamlı endüstriyel yüzey işleme ve kaplama çözümleri.",
      image: serviceImage2,
      link: "/endustriyel-hizmetler"
    },
    {
      title: "Marin Hizmetleri",
      description: "Deniz araçları ve yapıları için özel koruma ve kaplama sistemleri.",
      image: serviceImage3,
      link: "/marin-hizmetleri"
    }
  ];

  return (
    <section id="hizmetler" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-services">
          Hizmetler
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Uzman ekibimiz ve modern ekipmanlarımızla sunduğumuz hizmetler.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
