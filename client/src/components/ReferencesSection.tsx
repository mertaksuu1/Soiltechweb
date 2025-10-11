import eylulMarinLogo from "@assets/eylul-marin_1760193505977.png";
import microtechLogo from "@assets/Microtech_1760193505978.webp";
import mikronBoyaLogo from "@assets/stock_images/mikron_boya_company__3672edc7.jpg";
import tuzlaBoyaLogo from "@assets/tuzla_boya_1760193505979.png";
import cemreLogo from "@assets/cemre.png_1760193505979.webp";

export function ReferencesSection() {
  const references = [
    { name: "Eylül Marin", logo: eylulMarinLogo },
    { name: "Microtech", logo: microtechLogo },
    { name: "Mikron Boya", logo: mikronBoyaLogo },
    { name: "Tuzla Boya", logo: tuzlaBoyaLogo },
    { name: "Cemre", logo: cemreLogo },
  ];

  return (
    <section id="referanslar" className="py-16 md:py-24 border-t scroll-mt-20" data-testid="section-references">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-references">
          Referanslar
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Çalıştığımız marka ve projelerden seçkiler.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {references.map((ref, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              data-testid={`reference-logo-${index}`}
            >
              <img
                src={ref.logo}
                alt={ref.name}
                className="max-w-full h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
