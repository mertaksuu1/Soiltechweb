import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  images: string[];
  title?: string;
  subtitle?: string;
  description?: string;
  onPrimaryAction?: () => void;
}

export function HeroSlider({
  images,
  title = "Profesyonel boya ve kaplama uygulamaları",
  subtitle = "Yeni nesil yüzey çözümleri",
  description = "İç ve dış cephe boyaları, ısı yalıtım sistemleri ve dekoratif kaplamalarda uzman ekibimizle yanınızdayız.",
  onPrimaryAction,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide, images.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="hero-slider"
    >
      <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-[0_0_60px_rgba(14,165,233,0.15)]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slider ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-3xl text-white">
          <Badge
            variant="outline"
            className="mb-4 bg-primary/20 border-primary/40 text-white backdrop-blur-sm"
            data-testid="hero-badge"
          >
            {subtitle}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow-lg" data-testid="hero-title">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl" data-testid="hero-description">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={onPrimaryAction}
              className="bg-primary hover:bg-primary/90 text-primary-foreground border border-white/30 shadow-lg"
              data-testid="button-primary-action"
            >
              Hizmetleri Gör
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2" data-testid="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/60"
            }`}
            aria-label={`Slayt ${index + 1}`}
            data-testid={`slider-dot-${index}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all"
        aria-label="Önceki slayt"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all"
        aria-label="Sonraki slayt"
        data-testid="button-next-slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
