import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { label: 'FAQ', href: '/#faq' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  const handleLinkClick = (href) => {
    if (href.includes('#')) {
      const sectionId = href.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-2 px-8 py-16" id="contacto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl  font-headline font-bold text-hero-text mb-4">
              L.A. Store
            </h3>
            <p className="text-foreground">
              Tu tienda de videojuegos de confianza. Los mejores títulos al mejor precio.
            </p>
          </div>

          <div id="nosotros">
            <h4 className="text-xl font-headline font-bold text-hero-text mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-foreground hover:text-secondary transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="faq">
            <h4 className="text-xl font-headline font-bold text-hero-text mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-foreground">
              <li>Email: info@lastore.com</li>
              <li>Teléfono: +1 (555) 123-4567</li>
              <li>Horario: Lun-Vie 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t text-white border-border pt-8 text-center text-foreground">
          <p>&copy; 2024 L.A. Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
