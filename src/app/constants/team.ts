import type { TeamCardProps } from "@/app/features/landing-page/components/team/TeamCard.type";
import cleyton from "@/app/assets/team/cleyto.jpg";
import daniel from "@/app/assets/galery_images/bancada.jpeg";

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
    photos: cleyton,
    personName: "Cleyton Pettenon",
    position: "Especialista em Macbooks, Hardware e Recondicionamento de Telas",
    description:
      "Técnico especializado em MacBooks e manutenção avançada de hardware, com foco em diagnóstico e recondicionamento de telas.",
    phone: null,
  },
  {
    id: 2,
    photos: null,
    personName: "Gabriela Coelho",
    position: "Administrativo e Financeiro",
    description:
      "Responsável pela gestão administrativa e financeira, garantindo organização, transparência e controle de qualidade no atendimento.",
    phone: null,
  },
  {
    id: 3,
    photos: daniel,
    personName: "Daniel Martins",
    position: "Especialista Técnico em Smartphones",
    description:
      "Especialista em diagnóstico e reparo de smartphones, realizando trocas de componentes com foco em qualidade e durabilidade.",
    phone: null,
  },
  {
    id: 4,
    photos: null,
    personName: "Eneti Martinho",
    position: "Atendimento e Gravação a Laser",
    description:
      "Responsável pelo atendimento ao cliente e operação de gravação a laser, garantindo personalização com precisão e qualidade.",
    phone: null,
  },
];
