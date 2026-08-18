import { Mail, Phone, MessageCircle } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import type { ComponentType } from 'react';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  display: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=biprotibhaldar@gmail.com',
    icon: Mail,
    display: 'biprotibhaldar@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    url: 'tel:+8801906407230',
    icon: Phone,
    display: '+880 1906407230',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: 'https://wa.me/8801521724765',
    icon: MessageCircle,
    display: '+880 1521724765',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/biprotib-haldar',
    icon: FaLinkedinIn,
    display: 'linkedin.com/in/biprotib-haldar',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://facebook.com/biprotib.h',
    icon: FaFacebookF,
    display: 'facebook.com/biprotib.h',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/biprotib_haldar',
    icon: FaInstagram,
    display: '@biprotib_haldar',
  },
  {
    id: 'x',
    label: 'X',
    url: 'https://x.com/BiprotibH',
    icon: FaXTwitter,
    display: '@BiprotibH',
  },
];
