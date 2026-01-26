import { useState, useEffect, useMemo } from "react";

/**
 * A custom hook to manage the state and logic for a testimonial carousel.
 *
 * This hook handles the autoplay functionality, navigation between slides, and
 * determines which slides should be visible at any given time.
 *
 * @param {number} testimonialsCount - The total number of testimonials in the carousel.
 * @returns {object} An object containing the current state and functions to control the carousel.
 */
export const useTestimonials = (testimonialsCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsCount]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonialsCount) % testimonialsCount);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const visibleIndices = useMemo(() => {
    const prev = (currentIndex - 1 + testimonialsCount) % testimonialsCount;
    const next = (currentIndex + 1) % testimonialsCount;
    return [prev, currentIndex, next];
  }, [currentIndex, testimonialsCount]);

  return {
    currentIndex,
    visibleIndices,
    goToPrevious,
    goToNext,
    goToSlide,
  };
};
