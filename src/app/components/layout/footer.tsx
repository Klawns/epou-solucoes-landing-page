import { Button } from "@/app/components/ui/button";
import { ArrowUp, Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

/**
 * Renders the footer section of the website.
 *
 * This component displays contact information, links to services and company pages,
 * social media icons, and a copyright notice. It also includes a "Back to top"
 * button that smoothly scrolls the user to the top of the page.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  /**
   * Scrolls the window to the top of the page with a smooth animation.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    servicos: [
      { label: "Reparo de Tela", href: "#servicos" },
      { label: "Troca de Bateria", href: "#servicos" },
      { label: "Dentre outros reparos", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#equipe" },
      { label: "Contato", href: "#contato" },
    ],
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Divisória superior */}
      <div className="border-t border-background/10" />

      {/* Seção principal */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight">
                Epou Soluções<span className="text-muted-foreground">.</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Assistência técnica especializada em dispositivos Apple e
              eletrônicos, com foco em qualidade, confiança e agilidade em cada
              serviço
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/epousolucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:epousolucoes@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+55999991275314"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Av. Dorgival Pinheiro de Sousa, 1746 - sala 07 -
                  Entroncamento, Imperatriz - MA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+55999991275314"
                  className="text-sm text-muted-foreground hover:text-background transition-colors"
                >
                  (99) 99127-5314
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:epousolucoes@gmail.com"
                  className="text-sm text-muted-foreground hover:text-background transition-colors"
                >
                  epousolucoes@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Seg - Sex: 8h30 às 19h
                </span>
                <span className="text-sm text-muted-foreground">
                  Sab: 08h30 às 13h
                </span>
                <span className="text-sm text-muted-foreground">
                  Domingo: Fechado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Epou Soluções. Todos os direitos reservados.
            </p>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-background hover:bg-background/10 gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              Voltar ao topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
