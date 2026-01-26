import type { LucideIcon } from "lucide-react";

/**
 * Represents a single item in the gallery.
 */
export type GaleryItem = {
  /**
   * A unique identifier for the gallery item.
   */
  id: number;
  /**
   * The title of the gallery item.
   */
  title: string;
  /**
   * A brief description of the gallery item.
   */
  description: string;
  /**
   * The icon for the gallery item.
   * This can be a Lucide icon component, a string representing an image path, or null.
   */
  icon: LucideIcon | null | string;
  /**
   * The orientation of the gallery item.
   * This is an optional property that can be either 'horizontal' or 'vertical'.
   */
  orientation?: "horizontal" | "vertical";
};
