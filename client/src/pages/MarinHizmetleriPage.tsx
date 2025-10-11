import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { FixedSocialButtons } from "@/components/FixedSocialButtons";

export default function MarinHizmetleriPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FixedSocialButtons />
      
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 mb-6" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-title">
            Marin Hizmetleri
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Deniz araçları ve yapıları için özel koruma ve kaplama sistemleri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1200&auto=format&fit=crop"
              alt="Marin Hizmetleri"
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
                    Deniz ortamının zorlu koşullarına dayanıklı özel kaplama sistemleri ile 
                    tekne, yat ve deniz yapılarınızı koruma altına alıyoruz.
                  </p>
                  <p>
                    Tuzlu su, nem ve yoğun kullanıma karşı uzun ömürlü çözümler sunuyoruz. 
                    Marin sektöründeki deneyimimiz ile projelerinize değer katıyoruz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
            alt="Tekne Kaplama"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-1"
          />
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop"
            alt="Yat Bakımı"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            data-testid="image-gallery-2"
          />
          <img
            src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=800&auto=format&fit=crop"
            alt="Deniz Yapıları"
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
