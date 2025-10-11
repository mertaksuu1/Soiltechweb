import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function KumlamaBoyamaPage() {
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
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop"
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=800&auto=format&fit=crop"
            alt="Kumlama İşlemi"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-1"
          />
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop"
            alt="Boya Uygulaması"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-2"
          />
          <img
            src="https://images.unsplash.com/photo-1487957648902-0e9f96e8a6ea?q=80&w=800&auto=format&fit=crop"
            alt="Atölye Görünümü"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-3"
          />
        </div>

        <Card className="bg-primary/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Teklif Almak İster misiniz?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Projeleriniz için ücretsiz keşif ve detaylı teklif almak için bizimle iletişime geçin.
            </p>
            <Link href="/#iletisim">
              <Button size="lg" data-testid="button-contact">
                İletişime Geç
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
