import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-12">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-100/[0.04] to-transparent" />
      <div className="container-shell relative flex flex-col gap-8 text-sm text-slate-400 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Image src="/brand/vrilla-logo.png" alt="VRILLA" width={118} height={42} className="h-auto w-[118px]" />
          <p className="mt-3 max-w-sm leading-6">
            Transformación operacional digital para empresas técnicas de LATAM.
          </p>
        </div>
        <div className="flex max-w-2xl flex-wrap gap-x-5 gap-y-3 lg:justify-end">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/contacto" className="hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
