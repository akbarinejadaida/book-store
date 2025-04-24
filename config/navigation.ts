import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const mainNavigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact us', href: '/contact' },
] as const;

export const footerNavigation = [
  { name: 'About', href: '/about' },
  { name: 'What We Do', href: '/what-we-do' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Projects', href: '/projects' },
  { name: 'Press', href: '/press' },
  { name: 'Download', href: '/download' },
] as const;

export const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Twitter', href: '#', icon: FaTwitter },
] as const; 