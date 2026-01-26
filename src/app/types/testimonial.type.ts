/**
 * Represents a customer testimonial.
 */
export type Testimonial = {
  /**
   * A unique identifier for the testimonial.
   */
  id: number;
  /**
   * The name of the customer who gave the testimonial.
   */
  name: string;
  /**
   * The platform where the testimonial was given.
   */
  platform: "whatsapp" | "instagram" | "google";
  /**
   * The URL of the customer's profile picture. This is an optional property.
   */
  imageUrl?: string;
  /**
   * The text of the testimonial.
   */
  content: string;
  /**
   * The rating given by the customer, on a scale of 1 to 5.
   */
  rating: number;
};
