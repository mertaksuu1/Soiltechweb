import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, TrendingUp, Leaf, Target } from "lucide-react";

export function QualitySection() {
  const qualityPolicies = [
    {
      icon: CheckCircle,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin beklentilerini anlamak, ihtiyaçlarını doğru analiz etmek ve bu beklentileri aşan hizmetler sunmak önceliğimizdir. Geri bildirimleri titizlikle değerlendirir, süreçlerimizi sürekli geliştiririz.",
    },
    {
      icon: Award,
      title: "Yüksek Kalite ve Teknoloji Kullanımı",
      description: "Tüm boyama ve yüzey hazırlığı işlemlerinde uluslararası standartlara uygun, en kaliteli malzemeleri ve güncel teknolojileri kullanırız. Bu sayede uzun ömürlü, estetik ve dayanıklı sonuçlar elde ederiz.",
    },
    {
      icon: Users,
      title: "Uzman ve Eğitimli Kadro",
      description: "Deneyimli mühendislerimiz ve teknik ekibimiz, mesleki gelişimlerini sürekli sürdürür. Ekip olarak, güvenlik standartlarına tam uyum içinde, profesyonel ve verimli bir çalışma anlayışı benimseriz.",
    },
    {
      icon: Target,
      title: "Standartlara ve Mevzuatlara Uyum",
      description: "Tüm faaliyetlerimizi ulusal ve uluslararası standartlara uygun şekilde yürütür, kalite yönetim sistemimizi düzenli olarak gözden geçiririz. Denetim süreçlerini şeffaf bir biçimde gerçekleştiririz.",
    },
    {
      icon: TrendingUp,
      title: "Sürekli İyileştirme",
      description: "Hizmet kalitemizi ve süreç performansımızı sürekli olarak analiz eder, gelişim fırsatlarını belirleyip hızlıca hayata geçiririz. Bu yaklaşım, rekabet gücümüzü ve müşteri memnuniyetini artırmamızı sağlar.",
    },
    {
      icon: Leaf,
      title: "Çevre ve Sürdürülebilirlik Bilinci",
      description: "Tüm projelerimizde çevresel etkileri en aza indirmek için sürdürülebilir yöntemler ve çevre dostu malzemeler kullanırız. Doğal kaynakların korunması, geleceğe duyduğumuz sorumluluğun bir parçasıdır.",
    },
  ];

  return (
    <section id="kalite" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-quality">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-quality">
          Kalite Politikamız
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Soiltech Mühendislik, gemi boyama ve raspa hizmetlerinde kaliteyi en temel değer olarak benimser.
          Amacımız; müşterilerimize güvenilir, sürdürülebilir ve yüksek standartlarda hizmet sunarak, sektörde kalitenin öncüsü olmaktır.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPolicies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <Card key={index} className="hover-elevate transition-all" data-testid={`card-quality-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{policy.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {policy.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-foreground/90 leading-relaxed">
                Soiltech Mühendislik olarak, kalite politikamızı tüm çalışanlarımızla paylaşır ve bu politikayı yaşatmak için sürekli gelişim felsefesiyle çalışırız.
                Her projemizde kaliteye, güvene ve müşteri memnuniyetine olan bağlılığımızı göstermeye devam ederiz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
