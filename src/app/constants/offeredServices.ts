import {
  Headphones,
  Laptop,
  Smartphone,
  TabletIcon,
  Wrench,
  Zap,
} from "lucide-react";
import type { OfferedService } from "../types/offered-service.type";

/**
 * An array of objects representing the services offered.
 *
 * Each object has the following properties:
 * - `id`: A unique identifier for the service.
 * - `title`: The title of the service.
 * - `description`: A brief description of the service.
 * - `Icon`: A Lucide icon component representing the service.
 */
export const OfferedServices: OfferedService[] = [
  {
    id: 1,
    title: "Reparo de Celulares",
    description:
      "Manutenção especializada em iPhones e smartphones Android. Realizamos troca de telas, baterias, conectores, alto-falantes, câmeras e outros componentes, sempre com diagnóstico preciso e garantia.",
    Icon: Smartphone,
  },
  {
    id: 2,
    title: "Reparo de iPads e Tablets",
    description:
      "Serviços completos para iPads e tablets, incluindo substituição de telas, baterias e correção de falhas técnicas, garantindo o funcionamento ideal do dispositivo",
    Icon: TabletIcon,
  },
  {
    id: 3,
    title: "Reparo de MacBooks",
    description:
      "Assistência técnica especializada em MacBooks, com serviços que vão desde manutenção preventiva até reparos avançados em hardware, como teclado, tela, placa lógica e upgrades.",
    Icon: Laptop,
  },

  {
    id: 4,
    title: "Gravação a Laser",
    description:
      "Personalização de copos, garrafas e outros objetos por meio de gravação a laser de alta precisão, ideal para presentes personalizados e brindes exclusivos.",
    Icon: Zap,
  },
  {
    id: 5,
    title: "Venda de Acessórios",
    description:
      "Trabalhamos com capas, películas, carregadores, fones de ouvido e diversos acessórios para celulares e dispositivos eletrônicos, sempre priorizando qualidade e compatibilidade.",
    Icon: Headphones,
  },
  {
    id: 6,
    title: "Reparos Gerais",
    description:
      "Diagnóstico completo e reparo de falhas eletrônicas em diversos tipos de dispositivos, oferecendo soluções eficientes para problemas técnicos variados.",
    Icon: Wrench,
  },
];
