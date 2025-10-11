import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import iso9001 from "@assets/SOİLTECH MÜHENDİSLİK  9_page-0001_1760195872322.jpg";
import iso14001 from "@assets/SOİLTECH MÜHENDİSLİK  10_page-0001_1760195872322.jpg";
import iso45001 from "@assets/SOİLTECH MÜHENDİSLİK   45_page-0001_1760195872321.jpg";
import iso10002 from "@assets/SOİLTECH MÜHENDİSLİK  14_page-0001_1760195872323.jpg";

export function ISOCertificatesSection() {
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi",
      image: iso9001,
    },
    {
      name: "ISO 14001:2015",
      description: "Çevre Yönetim Sistemi",
      image: iso14001,
    },
    {
      name: "ISO 45001:2018",
      description: "İş Sağlığı ve Güvenliği Yönetim Sistemi",
      image: iso45001,
    },
    {
      name: "ISO 10002:2018",
      description: "Müşteri Memnuniyeti Yönetim Sistemi",
      image: iso10002,
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
            <Card key={index} className="hover-elevate transition-all overflow-hidden" data-testid={`card-iso-${index}`}>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                    <img
                      src={cert.image}
                      alt={`${cert.name} - ${cert.description}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-lg">{cert.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
