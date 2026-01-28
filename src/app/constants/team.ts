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
    position: "Técnico Especialista em Smartphones",
    description:
      "Profissional versátil focado em diagnósticos e reparos gerais de smartphones, garantindo agilidade e precisão na solução de qualquer problema.",
    phone: null,
  },
  {
    id: 2,
    photoUrl: null,
    personName: "Cleyton Pettenom",
    position: "Especialista em MacBooks e Hardware",
    description:
      "Técnico com domínio completo em celulares e especialização em MacBooks, realizando desde reparos simples aos mais complexos.",
    phone: null,
  },
  {
    id: 3,
    photoUrl: null,
    personName: "Eneti Martinho",
    position: "Especialista em Laser e Dispositivos",
    description:
      "Focada na personalização e gravação a laser de alta precisão, além de atuar na manutenção técnica especializada de tablets e smartphones.",
    phone: null,
  },
  {
    id: 4,
    photoUrl: null,
    personName: "Jefferson Nascimento",
    position: "Especialista em Recondicionamento de Telas",
    description:
      "Expert na troca de vidros e recondicionamento de telas. Também atua com personalização a laser e manutenção técnica de celulares.",
    phone: null,
  },
];
