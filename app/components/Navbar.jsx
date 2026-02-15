'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? 'text-darkOlive border-b-2 border-darkOlive'
      : 'hover:text-darkOlive transition';

  return (
    <header className=" flex justify-between items-center px-5 md:px-15 h-20 bg-primary">
      <nav>
        <h3 className="font-semibold mr-5 md:text-start  ">
          <Link href="/">Dr. Maya Reynolds</Link>
        </h3>
      </nav>

      <ul className="flex gap-10 text-[20px] font-medium">
        <li>
          <Link href="/blog" className={linkClass('/blog')}>
            Blog
          </Link>
        </li>

        <li>
          <Link href="/contact" className={linkClass('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
