import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

import mainImage from "@assets/WhatsApp Image 2025-10-10 at 18.47.23_1760535575985.jpeg";
import galleryImage1 from "@assets/WhatsApp Image 2025-10-10 at 18.47.24_1760535575976.jpeg";
import galleryImage2 from "@assets/WhatsApp Image 2025-10-10 at 18.47.25_1760535575977.jpeg";
import galleryImage3 from "@assets/WhatsApp Image 2025-10-10 at 17.48.10 (1)_1760535575978.jpeg";

export default function KumlamaBoyamaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Kumlama Boyama Atölyesi
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Modern atölyemizde profesyonel kumlama ve boyama hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img
              src={mainImage}
              alt="Kumlama Atölyesi"
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
                    Atölyemizde son teknoloji kumlama ve boyama ekipmanları ile hizmet vermekteyiz. 
                    Metal yüzeylerin hazırlanması, pas ve kir temizliği, ardından profesyonel boya 
                    uygulaması gerçekleştirilir.
                  </p>
                  <p>
                    Endüstriyel standartlara uygun çalışma ortamımız ve uzman ekibimizle, 
                    projelerinize kaliteli ve hızlı çözümler sunuyoruz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <img
            src={galleryImage1}
            alt="Kumlama İşlemi"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-1"
          />
          <img
            src={galleryImage2}
            alt="Boya Uygulaması"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-2"
          />
          <img
            src={galleryImage3}
            alt="Atölye Görünümü"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-3"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
