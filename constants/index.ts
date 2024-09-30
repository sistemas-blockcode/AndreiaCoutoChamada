import { Home2, Calendar1, Archive, Video, UserAdd } from 'iconsax-react';

export const sidebarLinks = [
  {
    Icon: Home2, // Ícone da página inicial
    route: '/',
    label: 'Home',
  },
  {
    Icon: Calendar1, // Ícone de eventos ou calendário
    route: '/upcoming',
    label: 'Programadas',
  },
  {
    Icon: Archive, // Ícone para eventos passados ou arquivados
    route: '/previous',
    label: 'Realizadas',
  },
  {
    Icon: Video, // Ícone de vídeo para gravações
    route: '/recordings',
    label: 'Gravações',
  },
  {
    Icon: UserAdd, // Ícone para adicionar um usuário ou sala pessoal
    route: '/personal-room',
    label: 'Sala Pessoal',
  },
];

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];
