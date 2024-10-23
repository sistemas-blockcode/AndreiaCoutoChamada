import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';
import Logotipo from './ui/logotipo';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-[#F1F5FB] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Logotipo size={80}/>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
