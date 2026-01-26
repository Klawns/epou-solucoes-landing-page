import type { Testimonial } from "@/app/types/testimonial.type";

import teste from "../assets/teste.png";

/**
 * An array of objects representing customer testimonials.
 *
 * Each object has the following properties:
 * - `id`: A unique identifier for the testimonial.
 * - `name`: The name of the customer who gave the testimonial.
 * - `platform`: The platform where the testimonial was given (e.g., "whatsapp", "instagram", "google").
 * - `imageUrl`: The URL of the customer's profile picture.
 * - `content`: The text of the testimonial.
 * - `rating`: The rating given by the customer, on a scale of 1 to 5.
 *
 * @todo Some `imageUrl` properties are empty strings. These should be updated with the actual image URLs.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    platform: "whatsapp",
    imageUrl: "",
    content:
      "Serviço impecável! Meu iPhone voltou como novo em menos de 24 horas. Atendimento excepcional e preço justo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    platform: "instagram",
    imageUrl: "",
    content:
      "Já é a terceira vez que levo meus dispositivos Apple na Epou. Confiança total na equipe técnica.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Beatriz",
    platform: "whatsapp",
    imageUrl: teste,
    content:
      "Substituíram a bateria do meu MacBook Pro rapidamente. Funcionando perfeitamente há 6 meses!",
    rating: 5,
  },
  {
    id: 4,
    name: "Roberto Mendes",
    platform: "google",
    imageUrl: "",
    content:
      "Excelente custo-benefício e transparência em todo o processo. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    id: 5,
    name: "Juliana Costa",
    platform: "instagram",
    imageUrl: "",
    content:
      "Profissionais extremamente capacitados. Recuperaram dados do meu iPad que achei que tinha perdido para sempre.",
    rating: 5,
  },
  {
    id: 6,
    name: "Fernando Lima",
    platform: "whatsapp",
    imageUrl: "",
    content:
      "Atendimento rápido e eficiente. Resolveram o problema do meu iPhone em poucas horas.",
    rating: 5,
  },
];
