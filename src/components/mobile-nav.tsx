"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/components/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
      {open ? (
        <div className="absolute left-5 right-5 top-[5.5rem] rounded-[1.5rem] border border-white/10 p-3 surface-panel">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  pathname === item.href
                    ? "bg-white/[0.08] text-white"
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
