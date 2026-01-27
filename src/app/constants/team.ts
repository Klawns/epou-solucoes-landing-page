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
    position: "Especialista em celulares",
    description:
      "Profissional focado em diagnósticos e reparos de smartphones, garantindo agilidade e precisão na solução de problemas do seu celular.",
    phone: "(11) 99999-1111",
  },
  {
    id: 2,
    photoUrl: null,
    personName: "Cleyton Pettenom",
    position: "Especialista em Celulares e Macbooks",
    description:
      "Técnico versátil com domínio em manutenção de celulares e MacBooks, realizando desde reparos de placa até substituição de componentes.",
    phone: "(11) 99999-2222",
  },
  {
    id: 3,
    photoUrl: null,
    personName: "Eneti Martinho",
    position: "Especialista em tablets e customização à laser",
    description:
      "Especialista na recuperação de tablets e na personalização exclusiva de dispositivos com tecnologia de gravação a laser.",
    phone: "(11) 99999-3333",
  },
  {
    id: 4,
    photoUrl: null,
    personName: "Jefferson Nascimento",
    position: "Especialista em troca de telas, vidros e muito mais",
    description:
      "Expert em substituição de telas e vidros, devolvendo a integridade do seu aparelho com acabamento impecável e qualidade original.",
    phone: "(11) 99999-3333",
  },
];
