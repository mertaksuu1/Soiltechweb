import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-about">
          Hakkımızda
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Gemi ve tekne bakım-onarım alanında uzmanlaşmış, yenilikçi ve güçlü bir mühendislik firmasıdır.
        </p>
        <Card className="hover-elevate transition-all">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Soiltech Mühendislik, gemi ve tekne bakım–onarım alanında uzmanlaşmış, yenilikçi ve güçlü bir mühendislik firmasıdır.
                Tuzla Orhanlı'da yer alan modern raspa ve boya tesisimizde; gelişmiş ekipmanlarımız, deneyimli ekibimiz ve yüksek kalite standartlarımız ile müşterilerimize profesyonel çözümler sunmaktayız.
              </p>
              <p>
                Kurulduğumuz günden bu yana, denizcilik sektörünün ihtiyaçlarını en iyi şekilde karşılamak amacıyla faaliyet gösteriyoruz.
                Her yıl çok sayıda gemi ve teknenin bakım, onarım ve yenileme işlemlerini başarıyla tamamlamamızın yanı sıra; yeni inşa edilen kuru yük gemileri, kimyasal tankerler, balıkçı tekneleri, askeri gemiler ve çok amaçlı deniz araçları projelerinde aktif olarak görev almaktayız.
              </p>
              <p>
                Soiltech Mühendislik, teknik bilgi birikimi, çözüm odaklı yaklaşımı ve müşteri memnuniyetine verdiği önem ile sektörde güvenilir bir marka haline gelmiştir.
                Amacımız; kalite, güvenlik ve çevre bilincini ön planda tutarak her projede kalıcı değer yaratmak ve sektörün öncü firmalarından biri olmayı sürdürmektir.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
