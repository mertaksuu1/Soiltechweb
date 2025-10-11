import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ISOCertificatesSection() {
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi",
      file: "/attached_assets/SOİLTECH MÜHENDİSLİK  9_1760194370119.pdf",
    },
    {
      name: "ISO 14001:2015",
      description: "Çevre Yönetim Sistemi",
      file: "/attached_assets/SOİLTECH MÜHENDİSLİK  10_1760194370120.pdf",
    },
    {
      name: "ISO 45001:2018",
      description: "İş Sağlığı ve Güvenliği Yönetim Sistemi",
      file: "/attached_assets/SOİLTECH MÜHENDİSLİK   45_1760194370120.pdf",
    },
    {
      name: "ISO 10002:2018",
      description: "Müşteri Memnuniyeti Yönetim Sistemi",
      file: "/attached_assets/SOİLTECH MÜHENDİSLİK  14_1760194370120.pdf",
    },
  ];

  return (
    <section id="iso-belgelerimiz" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-iso-certificates">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-iso-certificates">
          ISO Belgelerimiz
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Kalite, çevre ve güvenlik standartlarına olan bağlılığımızı gösteren uluslararası sertifikalarımız.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-iso-${index}`}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      data-testid={`button-view-certificate-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Belgeyi Görüntüle
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
