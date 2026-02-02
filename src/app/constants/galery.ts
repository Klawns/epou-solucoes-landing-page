import type { GaleryItem } from "@/app/types/galery.type";

import fachada from "../assets/galery_images/loja_fisica.jpg";
import bancada from "../assets/galery_images/bancada.jpeg";
import acessorios from "../assets/galery_images/acessorios.jpeg";
import celulares from "../assets/galery_images/celulares.jpeg";
import maquina_laser from "../assets/galery_images/laser.jpeg";

/**
 * An array of objects representing items in the gallery.
 *
 * Each object has the following properties:
 * - `id`: A unique identifier for the gallery item.
 * - `title`: The title of the gallery item.
 * - `description`: A brief description of the gallery item.
 * - `icon`: The icon for the gallery item. This can be a string representing the path to an image or a Lucide icon component.
 */
export const galeryItems: GaleryItem[] = [
  {
    id: 1,
    title: "Loja Física",
    description:
      "Um espaço moderno, organizado e de fácil acesso, planejado para receber você com conforto, segurança e um atendimento profissional desde o primeiro contato.",
    icon: fachada,
    orientation: "vertical",
  },
  {
    id: 2,
    title: "Laboratório Técnico",
    description:
      "Bancada técnica equipada com ferramentas profissionais e tecnologia de ponta para diagnóstico preciso e reparos avançados.",
    icon: bancada,
    orientation: "vertical",
  },
  {
    id: 4,
    title: "Especialistas em iPhone e Androids",
    description:
      "Contamos com técnicos qualificados e experientes para realizar reparos em diversos modelos de iPhone e Android.",
    icon: celulares,
    orientation: "vertical",
  },
  {
    id: 5,
    title: "Acessórios Selecionados",
    description:
      "Aqui você encontra acessórios que unem qualidade e funcionalidade. Trabalhamos com produtos Homologados, testados e aprovados para proteger seu celular.",
    icon: acessorios,
    orientation: "vertical",
  },
  {
    id: 6,
    title: "Gravação à laser",
    description:
      "Personalize acessórios, brindes e itens especiais com gravação a laser de alta precisão. Um serviço sofisticado, ideal para presentes, identidade visual e peças exclusivas.",
    icon: maquina_laser,
    orientation: "vertical",
  },
];
