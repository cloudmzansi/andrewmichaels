import { MenuItem, MenuCategory, SocialIcon } from '@/types';

// Standardized menu categories
export const menuCategories: MenuCategory[] = [
  {
    title: "Get started is Easy!",
    links: [
      { text: "Hire an Expert", href: "#contact" },
      { text: "Customer stories", href: "#" },
      { text: "Resources", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Career", href: "#" },
      { text: "Help Center", href: "#contact" },
    ],
  },
  {
    title: "Terms and privacy",
    links: [
      { text: "Terms of service", href: "#" },
      { text: "Privacy Policy", href: "#" },
    ],
  },
];

// Standardized menu items
export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "#about",
  },
  {
    id: 3,
    label: "Services",
    href: "#key_features",
  },
  {
    id: 4,
    label: "Work",
    href: "#main_features",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

// Social media icons
export const socialIcons: SocialIcon[] = [
  { href: "#", iconClass: "unicon-logo-linkedin icon-2" },
  { href: "#", iconClass: "unicon-logo-facebook icon-2" },
  { href: "#", iconClass: "unicon-logo-x-filled icon-2" },
  { href: "#", iconClass: "unicon-logo-instagram icon-2" },
];

// Legacy exports for backward compatibility
export const categories = menuCategories;
export const icons = socialIcons;
