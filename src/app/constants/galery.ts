import {
  EqualApproximately,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

import fachada from "../assets/fachada.jpg";
import equipamentos from "../assets/alguns_aparelhos.jpeg";
import equipe from "../assets/equipe.jpeg";
import acessorios from "../assets/acessorios.jpeg";
import celular_desmontado from "../assets/telefone_desmontado.jpeg";

/**
 * An array of objects representing items in the gallery.
 *
 * Each object has the following properties:
 * - `id`: A unique identifier for the gallery item.
 * - `title`: The title of the gallery item.
 * - `description`: A brief description of the gallery item.
 * - `icon`: The icon for the gallery item. This can be a string representing the path to an image or a Lucide icon component.
 */
export const galeryItems = [
  {
    id: 1,
    title: "Fachada da Loja",
    description:
      "Visite nossa loja moderna e bem localizada no coração da cidade.",
    icon: fachada,
    orientation: "vertical",
  },
  {
    id: 2,
    title: "Bancada de Reparos",
    description:
      "Nossa oficina é equipada com ferramentas de última geração para um diagnóstico preciso.",
    icon: equipamentos,
    orientation: "vertical",
  },
  {
    id: 3,
    title: "Equipe Especializada",
    description: "Técnicos certificados Apple",
    icon: equipe,
    orientation: "horizontal",
  },
  {
    id: 4,
    title: "Especialistas em iPhone e Androids",
    description: "Reparo especializado em iPhone e Androids",
    icon: celular_desmontado,
    orientation: "vertical",
  },
  {
    id: 5,
    title: "Acessórios",
    description:
      "Proteja e potencialize seu dispositivo com nossa vasta gama de acessórios de alta qualidade.",
    icon: acessorios,
    orientation: "vertical",
  },
  {
    id: 6,
    title: "Gravação à laser",
    description:
      "Personalize seu smartphone ou outro dispositivo com uma gravação à laser de alta precisão.",
    icon: Sparkles,
    
  },
];
