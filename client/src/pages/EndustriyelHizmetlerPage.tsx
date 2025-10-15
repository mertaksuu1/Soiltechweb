import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

import mainImage from "@assets/WhatsApp Image 2025-10-10 at 18.47.23 (1)_1760535575983.jpeg";
import galleryImage1 from "@assets/WhatsApp Image 2025-10-10 at 18.47.19_1760535575979.jpeg";
import galleryImage2 from "@assets/WhatsApp Image 2025-10-10 at 18.47.18 (1)_1760535575980.jpeg";
import galleryImage3 from "@assets/WhatsApp Image 2025-10-10 at 18.47.20_1760535575981.jpeg";

export default function EndustriyelHizmetlerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const specialServices = [
    {
      title: "Kumlama",
      description: "Yüzey hazırlama ve temizlik için profesyonel kumlama hizmetleri."
    },
    {
      title: "Su Jeti Uygulamaları",
      description: "Yüksek basınçlı su jeti ile hassas temizlik ve kesim işlemleri."
    },
    {
      title: "Yangın Boyası",
      description: "A1 ve A2 sınıfı yangın dayanımlı boya uygulamaları."
    },
    {
      title: "Metalizing",
      description: "Metal püskürtme ile yüzey kaplama ve koruma sistemleri."
    },
    {
      title: "Zemin Kaplama",
      description: "Endüstriyel zemin kaplama ve epoksi uygulamaları."
    },
    {
      title: "Tank Kaplamaları",
      description: "Sıvı ve gaz tankları için özel kaplama çözümleri."
    },
    {
      title: "İş Makine ve Ekipman Boyaları",
      description: "Ağır hizmet tipi iş makineleri için dayanıklı boya sistemleri."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 mb-6" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-title">
            Endüstriyel Hizmetler
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Geniş kapsamlı endüstriyel yüzey işleme ve kaplama çözümleri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img
              src={mainImage}
              alt="Endüstriyel Hizmetler"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              data-testid="image-main"
            />
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Hizmet Detayları</h2>
                <div className="space-y-3 text-foreground/90">
                  <p>
                    Endüstriyel tesisler, üretim hatları ve ağır hizmet ekipmanları için 
                    özel olarak tasarlanmış yüzey işleme ve koruma çözümleri sunuyoruz.
                  </p>
                  <p>
                    Modern ekipmanlarımız ve deneyimli ekibimizle, zorlu sanayi koşullarına 
                    dayanıklı, uzun ömürlü ve standartlara uygun uygulamalar gerçekleştiriyoruz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src={galleryImage1}
            alt="Endüstriyel Tesis"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-1"
          />
          <img
            src={galleryImage2}
            alt="Üretim Hattı"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-2"
          />
          <img
            src={galleryImage3}
            alt="İş Makineleri"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-3"
          />
        </div>

        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3" data-testid="heading-special-services">
              Özel Hizmetler
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Endüstriyel sektörün özel ihtiyaçlarına yönelik uzmanlaşmış hizmetlerimiz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialServices.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`special-service-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">Özel</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
