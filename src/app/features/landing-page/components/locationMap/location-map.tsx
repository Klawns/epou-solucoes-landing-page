import { Button } from "@/app/components/ui/button";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";

/**
 * Renders a section displaying the company's physical location.
 *
 * This component includes an embedded Google Maps iframe showing the store's
 * location, as well as detailed information about the address, opening hours,
 * and contact phone number. It also features a button that opens the location
 * directly in Google Maps for easy navigation.
 *
 * @returns {JSX.Element} The rendered location map section.
 */
export default function LocationMap() {
  const latitude = -5.5216383;
  const longitude = -47.4731831;
  const address =
    "Av. Dorgival Pinheiro de Sousa, 1746 - sala 07 - Entroncamento, Imperatriz - MA";
  const googleMapsUrl = "https://maps.app.goo.gl/z29t3Na42T23CyJ87";

  return (
    <section id="localização" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* 
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
            Localização
          </span>
          */}

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Onde Estamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados em Imperatriz - MA, com fácil acesso e estrutura preparada para receber você e seu dispositivo com conforto e segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mapa embed do Google Maps */}
          <div className="overflow-hidden border-border hover:shadow-lg transition-shadow h-full flex flex-col group">
            <div className="p-0 flex-1">
              <div className="w-full h-full min-h-[400px] bg-gray-100 dark:bg-gray-800 relative transition-transform duration-700 group-hover:scale-110">
                {/* Iframe do Google Maps */}
                <iframe
                  src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Epou Soluções"
                />
              </div>
            </div>
          </div>

          {/* Informações de contato e horários */}
          <div className="space-y-6">
            {/* Endereço */}
            <div className="border-border hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-muted-foreground">{address}</p>
                    <p className="text-muted-foreground">CEP: 65903-270</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário de funcionamento */}
            <div className="border-border hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 08:30 - 19:00</p>
                      <p>Sábado: 08:30 - 13:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telefone */}
            <div className="border-border hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                    <p className="text-muted-foreground">(99) 99127-5314</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão para abrir no Google Maps */}
            <Button variant="default" size="lg" className="w-full" asChild>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
