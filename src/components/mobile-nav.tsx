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
        className="inline-flex size-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] text-white shadow-[0_10px_34px_rgba(0,0,0,0.36)] transition active:scale-95"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
      {open ? (
        <div className="absolute left-4 right-4 top-[4.7rem] overflow-hidden rounded-[1.4rem] border border-white/12 bg-[#070b12]/98 p-2 shadow-[0_26px_90px_rgba(0,0,0,0.62)] ring-1 ring-cyan-100/10 backdrop-blur-xl sm:top-[5rem]">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/40 to-transparent" />
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3.5 text-sm transition active:scale-[0.99] ${
                  pathname === item.href
                    ? "bg-white/[0.1] text-white shadow-inner"
                    : "text-slate-300 hover:bg-white/[0.055] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              scroll
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-cyan-100 px-4 py-3.5 text-sm font-medium text-slate-950 transition active:scale-[0.99]"
            >
              Solicitar diagnóstico
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
