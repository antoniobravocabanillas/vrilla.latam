"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/site-data";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-cyan-100/80 after:transition-all ${
              active ? "text-white after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
