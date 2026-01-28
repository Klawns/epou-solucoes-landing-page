import { Instagram, Mail, Phone } from "lucide-react";
import { ContactCard } from "./components/contact-card";
import whatsapp_logo from "@/app/assets/logos/whatsapp-white-icon.svg";

/**
 * Renders the contact section of the landing page.
 *
 * This component displays various methods for users to get in touch, including
 * phone, Instagram, and email, all presented with a unique "cracked glass"
 * visual effect created using SVG and CSS. It also features a prominent button
 * to initiate a conversation on WhatsApp.
 *
 * @returns {JSX.Element} The rendered contact section.
 */
export default function Contact() {
  return (
    <section
      id="contato"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Cracked glass effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main crack lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Central impact point cracks */}
          <line
            x1="15"
            y1="20"
            x2="35"
            y2="45"
            stroke="currentColor"
            strokeWidth="0.15"
            className="text-primary-foreground"
          />
          <line
            x1="35"
            y1="45"
            x2="25"
            y2="70"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-primary-foreground"
          />
          <line
            x1="35"
            y1="45"
            x2="55"
            y2="35"
            stroke="currentColor"
            strokeWidth="0.12"
            className="text-primary-foreground"
          />
          <line
            x1="35"
            y1="45"
            x2="40"
            y2="75"
            stroke="currentColor"
            strokeWidth="0.08"
            className="text-primary-foreground"
          />

          {/* Secondary crack branches */}
          <line
            x1="55"
            y1="35"
            x2="75"
            y2="25"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-primary-foreground"
          />
          <line
            x1="55"
            y1="35"
            x2="70"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.08"
            className="text-primary-foreground"
          />
          <line
            x1="70"
            y1="50"
            x2="85"
            y2="45"
            stroke="currentColor"
            strokeWidth="0.06"
            className="text-primary-foreground"
          />
          <line
            x1="70"
            y1="50"
            x2="80"
            y2="70"
            stroke="currentColor"
            strokeWidth="0.08"
            className="text-primary-foreground"
          />

          {/* Bottom right cracks */}
          <line
            x1="85"
            y1="75"
            x2="70"
            y2="85"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-primary-foreground"
          />
          <line
            x1="85"
            y1="75"
            x2="95"
            y2="60"
            stroke="currentColor"
            strokeWidth="0.08"
            className="text-primary-foreground"
          />
          <line
            x1="85"
            y1="75"
            x2="90"
            y2="95"
            stroke="currentColor"
            strokeWidth="0.06"
            className="text-primary-foreground"
          />

          {/* Top edge cracks */}
          <line
            x1="5"
            y1="5"
            x2="20"
            y2="15"
            stroke="currentColor"
            strokeWidth="0.08"
            className="text-primary-foreground"
          />
          <line
            x1="20"
            y1="15"
            x2="15"
            y2="20"
            stroke="currentColor"
            strokeWidth="0.06"
            className="text-primary-foreground"
          />

          {/* Additional detail cracks */}
          <line
            x1="25"
            y1="70"
            x2="10"
            y2="85"
            stroke="currentColor"
            strokeWidth="0.06"
            className="text-primary-foreground"
          />
          <line
            x1="40"
            y1="75"
            x2="55"
            y2="90"
            stroke="currentColor"
            strokeWidth="0.05"
            className="text-primary-foreground"
          />
          <line
            x1="75"
            y1="25"
            x2="90"
            y2="15"
            stroke="currentColor"
            strokeWidth="0.06"
            className="text-primary-foreground"
          />
          <line
            x1="75"
            y1="25"
            x2="80"
            y2="10"
            stroke="currentColor"
            strokeWidth="0.05"
            className="text-primary-foreground"
          />
        </svg>

        {/* Glass shards effect with subtle gradients */}
        <div
          className="absolute top-[15%] left-[30%] w-16 h-16 bg-gradient-to-br from-primary-foreground/5 to-transparent rotate-12 clip-path-polygon"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div
          className="absolute top-[40%] right-[25%] w-12 h-12 bg-gradient-to-tl from-primary-foreground/3 to-transparent -rotate-6"
          style={{ clipPath: "polygon(30% 0%, 100% 30%, 70% 100%, 0% 70%)" }}
        />
        <div
          className="absolute bottom-[20%] left-[20%] w-20 h-14 bg-gradient-to-tr from-primary-foreground/4 to-transparent rotate-45"
          style={{ clipPath: "polygon(0% 0%, 100% 20%, 80% 100%, 20% 80%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4">
              Entre em Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Precisa de Reparo?
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Seu dispositivo quebrou? Entre em contato e faça um orçamento.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <ContactCard
              icon={Phone}
              title="Telefone"
              description="(99) 99127-5314"
              href="tel:+55999991275314"
            />

            <ContactCard
              icon={Instagram}
              title="Instagram"
              description="@epousolucoes"
              href="https://instagram.com/m/epousolucoes"
              target="_blank"
              rel="noopener noreferrer"
            />

            <ContactCard
              icon={whatsapp_logo}
              title="Whatsapp"
              description="Fale Conosco"
              href="https://wa.me/55999991275314?text=Ol%C3%A1%21%20Quero%20um%20or%C3%A7amento.%0A"
              target="_blank"
              rel="noopener noreferrer"
            />

            <ContactCard
              icon={Mail}
              title="Email"
              description="epousolucoes@gmail.com"
              href="mailto:epousolucoes@gmail.com"
            />
          </div>

          {/*          <div className="text-center">
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a
                href="https://wa.me/55999991275314?text=Ol%C3%A1%21%20Quero%20um%20or%C3%A7amento.%0A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale pelo WhatsApp
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
