"use client";

import { useState } from "react";
import { NavItems } from "@/app/constants/nav-items";
import { Menu, Phone, X } from "lucide-react";
import InstagramLogo from "@/app/assets/logos/instagram.svg";
import WhatsappLogo from "@/app/assets/logos/whatsapp-black.svg";
import { cn } from "@/app/lib/utils";

/**
 * Renders the header section of the website.
 *
 * This component displays the site logo, navigation links, and social media icons.
 * The navigation links are dynamically generated from the `NavItems` constant.
 * It is responsive, showing a hamburger menu on smaller screens.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-row gap-1 text-2xl font-bold tracking-tight"
          >
            <span>Épou Soluções</span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Icons and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Instagram"
                href="https://www.instagram.com/epousolucoes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramLogo}
                  alt="Instagram Logo"
                  className="h-5 w-5"
                />
              </a>
              <a
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
                href="https://wa.me/55999991275314"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WhatsappLogo}
                  alt="WhatsApp Logo"
                  className="h-5 w-5"
                />
              </a>
              <a
                className="cursor-pointer flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                href="tel:+55999991275314"
                aria-label="Telefone"
              >
                <Phone className="w-4.5 h-4.5" />
                (99) 99127-5314
              </a>
            </div>

            {/* Mobile Icons & Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Instagram"
                href="https://www.instagram.com/epousolucoes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramLogo}
                  alt="Instagram Logo"
                  className="h-5 w-5"
                />
              </a>
              <a
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
                href="https://wa.me/55999991275314?text=Ol%C3%A1%21%20Quero%20um%20or%C3%A7amento.%0A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WhatsappLogo}
                  alt="WhatsApp Logo"
                  className="h-5 w-5"
                />
              </a>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-lg transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="flex flex-row gap-1 text-2xl font-bold tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Épou Soluções</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8">
          {NavItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
