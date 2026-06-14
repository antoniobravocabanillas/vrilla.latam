import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { PremiumLink } from "@/components/ui-primitives";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070b]/94 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:bg-[#05070b]/88">
      <div className="container-shell flex h-16 items-center justify-between sm:h-18 lg:h-20">
        <Link href="/" className="group relative flex items-center" scroll>
          <span className="absolute -inset-4 rounded-full bg-cyan-100/0 blur-2xl transition group-hover:bg-cyan-100/10" />
          <Image
            src="/brand/vrilla-logo-horizontal-light.svg"
            alt="VRILLA"
            width={150}
            height={32}
            className="relative h-auto w-[112px] opacity-95 sm:w-[128px] lg:w-[142px]"
            priority
          />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <MobileNav />
          <div className="hidden sm:block">
            <PremiumLink href="/contacto">Solicitar Diagnóstico</PremiumLink>
          </div>
        </div>
      </div>
    </header>
  );
}
