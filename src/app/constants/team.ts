import type { TeamCardProps } from "@/app/features/landing-page/components/team/TeamCard.type";

/**
 * An array of objects representing the team members.
 *
 * Each object has the following properties:
 * - `id`: A unique identifier for the team member.
 * - `photoUrl`: The URL of the team member's photo.
 * - `personName`: The name of the team member.
 * - `position`: The team member's position in the company.
 * - `description`: A brief description of the team member.
 * - `phone`: The team member's phone number.
 *
 * @todo The `photoUrl` is currently `null` for all team members. This should be updated with the actual photo URLs.
 */
export const Team: TeamCardProps[] = [
  {
    id: 1,
    photoUrl: null,
    personName: "Daniel Martins",
    position: "Especialista Apple",
    description:
      "Técnico certificado com 5 anos de experiência em reparos de iPhone e MacBook. Apaixonado por tecnologia e soluções precisas.",
    phone: "(11) 99999-1111",
  },
  {
    id: 2,
    photoUrl: null,
    personName: "Cleiton Pettenom",
    position: "Técnica Android & Tablets",
    description:
      "Especialista em hardware Samsung e Motorola. Realiza trocas de vidro e reparos em placas com agilidade e qualidade.",
    phone: "(11) 99999-2222",
  },
  {
    id: 3,
    photoUrl: null,
    personName: "Eneti Martinho",
    position: "Gerente de Atendimento",
    description:
      "Responsável por garantir a melhor experiência para o cliente, desde o primeiro contato até a entrega do dispositivo.",
    phone: "(11) 99999-3333",
  },
  {
    id: 4,
    photoUrl: null,
    personName: "Jefferson Nascimento",
    position: "Gerente de Atendimento",
    description:
      "Responsável por garantir a melhor experiência para o cliente, desde o primeiro contato até a entrega do dispositivo.",
    phone: "(11) 99999-3333",
  },
];
