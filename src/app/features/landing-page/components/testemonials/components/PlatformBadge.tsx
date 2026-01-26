import { MessageCircle, Instagram, Star } from "lucide-react";
import type { Testimonial } from "@/app/types/testimonial.type";

/**
 * Renders a badge indicating the platform from which a testimonial originated.
 *
 * This component displays a platform-specific icon, color scheme, and label
 * based on the `platform` prop provided. It is used within the `TestimonialCard`
 * to show the source of the customer feedback.
 *
 * @param {object} props - The props for the component.
 * @param {Testimonial["platform"]} props.platform - The platform from which the testimonial originated.
 * @returns {JSX.Element} The rendered platform badge.
 */
export const PlatformBadge = ({ platform }: { platform: Testimonial["platform"] }) => {
    const config = {
      whatsapp: {
        icon: MessageCircle,
        bg: "bg-green-500/10",
        text: "text-green-500",
        label: "WhatsApp",
      },
      instagram: {
        icon: Instagram,
        bg: "bg-pink-500/10",
        text: "text-pink-500",
        label: "Instagram",
      },
      google: {
        icon: Star,
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        label: "Google",
      },
    };
  
    const { icon: Icon, bg, text, label } = config[platform];
  
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
        <Icon className="w-3 h-3" />
        {label}
      </span>
    );
  };
