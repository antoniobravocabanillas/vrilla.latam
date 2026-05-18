import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { PremiumLink } from "@/components/ui-primitives";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070b]/65 backdrop-blur-2xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="group relative flex items-center">
          <span className="absolute -inset-4 rounded-full bg-cyan-100/0 blur-2xl transition group-hover:bg-cyan-100/10" />
          <Image
            src="/brand/vrilla-logo.png"
            alt="VRILLA"
            width={118}
            height={42}
            className="relative h-auto w-[118px] opacity-95"
            priority
          />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-3">
          <MobileNav />
          <PremiumLink href="/contacto">Diagnóstico</PremiumLink>
        </div>
      </div>
    </header>
  );
}
