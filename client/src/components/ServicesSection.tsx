import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Palette, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Ruler,
      title: "Ücretsiz Keşif",
      description: "Uzmanlarımız adresinizde ölçüm ve analiz yapar.",
      color: "text-blue-600"
    },
    {
      icon: Palette,
      title: "Renk Eşleştirme",
      description: "Mekanınıza uygun renk paletleri hazırlarız.",
      color: "text-purple-600"
    },
    {
      icon: ShieldCheck,
      title: "Garantili Uygulama",
      description: "Söz verdiğimiz tarihte teslim, yazılı garanti.",
      color: "text-green-600"
    },
  ];

  return (
    <section id="hizmetler" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-services">
          Hizmetler
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Keşif, renk danışmanlığı ve anahtar teslim uygulama hizmetlerimiz.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all group"
                data-testid={`service-card-${index}`}
              >
                <CardHeader className="space-y-0 pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
