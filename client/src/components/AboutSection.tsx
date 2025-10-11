import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-about">
          Hakkımızda
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          15 yılı aşkın deneyimimizle, kalite ve güven odaklı mühendislik çözümleri sunuyoruz.
        </p>
        <Card className="hover-elevate transition-all">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                <strong className="text-foreground">SOILTECH MÜHENDİSLİK SANAYİ VE TİCARET LİMİTED ŞİRKETİ</strong>, 
                15 yılı aşkın birikimiyle, çeşitli sektörlerin ihtiyaçlarına yanıt vererek kalite, güven ve çözüm odaklı bir yaklaşımla faaliyete başlamıştır. Bu köklü deneyim, bizi yenilikçi ve sürdürülebilir çözümler sunan bir mühendislik markası olma yoluna teşvik etmektedir.
              </p>
              <p>
                Atölyemizde ve saha uygulamalarımızda; müşteri beklentilerini en üst düzeyde karşılamak için özenle çalışmakta, her projede kaliteyi ön planda tutarak güvenilir çözümler sunmaktayız.
              </p>
              <p>
                Şirketimiz <strong>ISO 9001:2015 Kalite Yönetim Sistemi</strong>, <strong>ISO 14001:2015 Çevre Yönetim Sistemi</strong>, <strong>ISO 45001:2018 İş Sağlığı ve Güvenliği Yönetim Sistemi</strong> ile <strong>ISO 10002:2018 Müşteri Memnuniyeti Yönetim Sistemi</strong> sertifikalarına sahiptir. Bu belgeler doğrultusunda, ulusal ve uluslararası standartlara uygun bir şekilde faaliyetlerimizi sürdürmekteyiz.
              </p>
              <p>
                SOILTECH olarak hedefimiz; ulusal ve uluslararası projelerde teknik mükemmelliyet, iş güvenliği, çevresel duyarlılık ve müşteri memnuniyetini temel alarak sektörde kalıcı bir değer yaratmaktır. Bu amaçla, uzman kadromuz ve modern ekipmanlarımızla, başta yüzey hazırlığı, kumlama ve boya uygulamaları olmak üzere birçok alanda hizmet sunmaktayız.
              </p>
              <p className="font-medium text-foreground">
                <strong>Vizyonumuz;</strong> sahip olduğumuz bilgi ve deneyimi sürekli geliştirerek, kaliteyi bir standart değil, bir kültür haline getirmek ve sektörde güvenilir bir çözüm ortağı olarak konumlanmaktır.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
