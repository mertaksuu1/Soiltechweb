import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SpecialApplicationsSection() {
  const applications = [
    {
      title: "İç Cephe Boyaları",
      description: "Silinebilir, kokusuz ve yüksek örtücülük özellikleriyle iç mekanlarınız için ideal çözümler.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
      badge: "Popüler"
    },
    {
      title: "Dış Cephe Sistemleri",
      description: "UV dayanımlı, uzun ömürlü dış cephe boya ve kaplama çözümleri.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      badge: "Dayanıklı"
    },
    {
      title: "Isı Yalıtım (Mantolama)",
      description: "Enerji verimliliği ve konfor bir arada. Profesyonel mantolama uygulamaları.",
      image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?q=80&w=1200&auto=format&fit=crop",
      badge: "Enerji Tasarrufu"
    },
  ];

  return (
    <section id="ozel-uygulamalar" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-special-applications">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-special-applications">
          Özel Uygulamalar
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Öne çıkan ürün grupları ve uzmanlık alanlarımız.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all group"
              data-testid={`application-card-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge
                  className="absolute top-3 right-3 bg-primary text-primary-foreground"
                  data-testid={`badge-${index}`}
                >
                  {app.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`application-title-${index}`}>
                  {app.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`application-description-${index}`}>
                  {app.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
