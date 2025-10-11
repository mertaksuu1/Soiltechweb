import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mesajınız alındı!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    setFormData({ name: "", phone: "", message: "" });
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
        <Card className="max-w-3xl">
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
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a
                href="tel:+90XXXXXXXXXX"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4" />
                +90 XXX XXX XX XX
              </a>
              <a
                href="mailto:info@soiltech.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                info@soiltech.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
