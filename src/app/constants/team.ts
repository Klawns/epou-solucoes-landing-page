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
    personName: "Cleyton Pettenon",
    position: "Especialista em Macbooks, Hardware e Recondicionamento de Telas",
    description:
      "Técnico com ampla experiência em manutenção de celulares e especialização em MacBooks. Atua em reparos avançados de hardware, incluindo placa lógica, além de recondicionamento de telas e soluções técnicas de alta complexidade..",
    phone: null,
  },
  {
    id: 2,
    photoUrl: null,
    personName: "Gabriela Coelho",
    position: "Responsável Administrativa e Financeira",
    description:
      "Responsável pela gestão administrativa e financeira da Épou Soluções, garantindo organização, transparência nos processos e um atendimento estruturado do início ao fim. Atua diretamente no controle de qualidade dos serviços, relacionamento com clientes e suporte à equipe técnica.",
    phone: null,
  },
  {
    id: 3,
    photoUrl: null,
    personName: "Daniel Martins",
    position: "Especialista Técnico em Smartphones",
    description:
      "Profissional especializado em diagnóstico e reparo de smartphones, atuando com troca de telas, baterias e componentes internos, sempre com foco em qualidade, segurança e durabilidade dos serviços.",
    phone: null,
  },
  {
    id: 4,
    photoUrl: null,
    personName: "Eneti Martinho",
    position: "Atendimento, Laser e Dispositivos",
    description:
      "Responsável pelo atendimento ao cliente, personalização e gravação a laser de alta precisão. Atua também na manutenção técnica de tablets e smartphones, garantindo qualidade, funcionalidade e acabamento de alto padrão em cada serviço prestado.",
    phone: null,
  },
];
