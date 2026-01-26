import type { LucideIcon } from "lucide-react";

/**
 * Represents a service offered by the company.
 */
export type OfferedService = {
  /**
   * A unique identifier for the service.
   */
  id: number;
  /**
   * The title of the service.
   */
  title: string;
  /**
   * A brief description of the service.
   */
  description: string;
  /**
   * A Lucide icon component representing the service.
   */
  Icon: LucideIcon;
};
