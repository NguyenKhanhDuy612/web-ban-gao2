export type Testimonial = {
  id: number;
  customerName: string;
  content: string;
  rating: number;
  location?: string;
};

export const testimonials: Testimonial[] = [];