/**
 * Defines the props for the `TeamCard` component.
 */
export interface TeamCardProps {
  /**
   * The unique identifier for the team member.
   */
  id: number;
  /**
   * One or more URLs of the team member's photos. Can be a single string, an array of strings, or null if no photo is available.
   * When absent or null, the component should show a fallback icon.
   */
  photos?: string | string[] | null;
  /**
   * The name of the team member.
   */
  personName: string;
  /**
   * The team member's position or role in the company.
   */
  position: string | null;
  /**
   * A brief description of the team member's skills and experience.
   */
  description: string;
  /**
   * The team member's contact phone number.
   */
  phone: string | null;
}
