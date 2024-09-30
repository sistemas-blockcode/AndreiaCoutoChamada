'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-[#F1F5FB] p-6 pt-28 text-white max-sm:hidden lg:w-28">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item, index) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              key={index}
              href={item.route}
              className={cn(
                'flex items-center p-4 rounded-lg justify-center text-[#2C0D73]',
                {
                  'bg-[#2C0D73] text-white': isActive,
                }
              )}
            >
              {/* Renderizando o ícone diretamente */}
              <item.Icon size="24" variant={isActive ? "Bold" : "Outline"} />
              <p className="text-lg font-semibold max-lg:hidden">
                {/* Texto do item, se desejar exibir */}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
