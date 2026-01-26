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
      "Reparo de iPhones e smartphones Android. Troca de tela, bateria, conectores e muito mais.",
    Icon: Smartphone,
  },
  {
    id: 2,
    title: "Reparo de iPads & Tablets",
    description:
      "Manutenção completa de iPads e tablets. Substituição de telas, baterias e reparos gerais.",
    Icon: TabletIcon,
  },
  {
    id: 3,
    title: "Reparo de MacBooks",
    description:
      "Assistência técnica especializada em MacBooks. Teclado, tela, placa lógica e upgrades.",
    Icon: Laptop,
  },

  {
    id: 4,
    title: "Customização a Laser",
    description:
      "Personalização de copos, garrafas e outros objetos com gravação a laser de alta precisão.",
    Icon: Zap,
  },
  {
    id: 5,
    title: "Venda de Acessórios",
    description:
      "Encontre capas, películas, carregadores, fones de ouvido e outros acessórios para seu dispositivo.",
    Icon: Headphones,
  },
  {
    id: 6,
    title: "Reparos Gerais",
    description:
      "Diagnóstico completo e reparo de qualquer problema em seus dispositivos eletrônicos.",
    Icon: Wrench,
  },
];
