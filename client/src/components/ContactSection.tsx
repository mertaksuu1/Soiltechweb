import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mesajınız alındı!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="iletisim" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-contact">
          İletişim
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Formu doldurun, en kısa sürede dönüş yapalım.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Kısaca talebinizi yazın"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  data-testid="button-submit"
                >
                  Gönder
                </Button>
              </form>
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+905326426899"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="h-4 w-4" />
                  +90 532 642 68 99
                </a>
                <a
                  href="mailto:info@soiltech.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="h-4 w-4" />
                  info@soiltech.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Konumumuz</h3>
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.0764935715487!2d29.319829!3d40.879441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad7d4b4b4b4b5%3A0xeccbb56605008b9a!2zU0_EsExURUNIIEtVTUxBTUEgQk9ZQU1BIFVZR1VNQUxBUkk!5e0!3m2!1str!2str!4v1639000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SOILTECH Konum - Aydınlı KOSB, Tuzla"
                    data-testid="map-iframe"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=40.879441,29.319829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="gap-2 w-full"
                    data-testid="button-open-maps"
                  >
                    <MapPin className="h-4 w-4" />
                    Haritada Aç
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
