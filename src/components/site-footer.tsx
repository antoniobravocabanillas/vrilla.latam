import Image from "next/image";
import Link from "next/link";
import { footerNavItems } from "@/components/site-data";
import { PremiumLink } from "@/components/ui-primitives";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-12">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-100/[0.04] to-transparent" />
      <div className="container-shell relative grid gap-10 text-sm text-slate-400 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <Image
            src="/brand/vrilla-logo-horizontal-light.svg"
            alt="VRILLA"
            width={150}
            height={32}
            className="h-auto w-[142px]"
          />
          <p className="mt-3 max-w-sm leading-6">
            Sistemas digitales para operar mejor, vender con más control y escalar con inteligencia.
          </p>
          <div className="mt-6">
            <PremiumLink href="/contacto">Solicitar Diagnóstico</PremiumLink>
          </div>
        </div>
        <div className="flex max-w-2xl flex-wrap gap-x-5 gap-y-3 lg:justify-end">
          {footerNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
