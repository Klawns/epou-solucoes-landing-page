/**
 * Defines the props for the `TeamCard` component.
 */
export interface TeamCardProps {
  /**
   * The unique identifier for the team member.
   */
  id: number;
  /**
   * The URL of the team member's photo. Can be a string or null if no photo is available.
   */
  photoUrl: string | null;
  /**
   * The name of the team member.
   */
  personName: string;
  /**
   * The team member's position or role in the company.
   */
  position: string;
  /**
   * A brief description of the team member's skills and experience.
   */
  description: string;
  /**
   * The team member's contact phone number.
   */
  phone: string;
}
