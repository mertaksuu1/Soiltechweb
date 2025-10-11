export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 text-slate-300 mt-16" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm" data-testid="footer-copyright">
              © {currentYear} SOILTECH Mühendislik. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#hakkimizda"
              className="hover:text-white transition-colors"
              data-testid="footer-link-about"
            >
              Hakkımızda
            </a>
            <a
              href="#iletisim"
              className="hover:text-white transition-colors"
              data-testid="footer-link-contact"
            >
              İletişim
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-testid="footer-link-privacy"
            >
              KVKK / Gizlilik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
