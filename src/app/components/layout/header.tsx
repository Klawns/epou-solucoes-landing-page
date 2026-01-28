import { NavItems } from "@/app/constants/nav-items";
import { Phone } from "lucide-react";
import InstagramLogo from "@/app/assets/logos/instagram.svg";

/**
 * Renders the header section of the website.
 *
 * This component displays the site logo, navigation links, and social media icons.
 * The navigation links are dynamically generated from the `NavItems` constant.
 * The header is fixed at the top of the page and has a blurred background effect.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex flex-row gap-1 text-2xl font-bold tracking-tight"
        >
          <span>Épou Soluções</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NavItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-row gap-4">
          <a
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Instagram"
            href="https://www.instagram.com/epousolucoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramLogo} alt="Instagram Logo" className="h-5 w-5" />
          </a>

          <a
            className="cursor-pointer hidden rounded-full sm:flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            href="tel:+55999991275314"
            aria-label="Telefone"
          >
            <Phone className="w-4.5 h-4.5" />
            (99) 99127-5314
          </a>
        </div>
      </div>
    </header>
  );
}
