'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  icon: ReactNode; // Agora aceitando ícone como um componente React
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, icon, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        {/* Usando o ícone passado como prop */}
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm font-light">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
