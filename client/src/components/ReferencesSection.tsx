export function ReferencesSection() {
  const references = [
    { name: "Referans 1", logo: "https://via.placeholder.com/200x60/e5e7eb/6b7280?text=Logo+1" },
    { name: "Referans 2", logo: "https://via.placeholder.com/200x60/e5e7eb/6b7280?text=Logo+2" },
    { name: "Referans 3", logo: "https://via.placeholder.com/200x60/e5e7eb/6b7280?text=Logo+3" },
    { name: "Referans 4", logo: "https://via.placeholder.com/200x60/e5e7eb/6b7280?text=Logo+4" },
    { name: "Referans 5", logo: "https://via.placeholder.com/200x60/e5e7eb/6b7280?text=Logo+5" },
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
