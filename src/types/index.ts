export interface FeatureCardData {
  id: number;
  title: string;
  icon: string;
  description: string;
  headerColor: string;
  isNew?: boolean;
  badgeText?: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
  tooltip: string;
  blink?: boolean;
}
