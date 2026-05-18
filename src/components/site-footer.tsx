import Image from "next/image";
import Link from "next/link";
import { OperationalMesh } from "@/components/operational-mesh";
import { MeshPillarNav } from "@/components/operational-mesh";
import { navItems } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-10">
      <OperationalMesh variant="footer" className="absolute inset-0 rounded-none opacity-20" />
      <div className="container-shell relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="flex flex-col gap-6 text-sm text-slate-400">
          <div>
            <Image src="/brand/vrilla-logo.png" alt="VRILLA" width={118} height={42} className="h-auto w-[118px]" />
            <p className="mt-2 max-w-sm">Transformación operacional digital para empresas técnicas de LATAM.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" className="hover:text-white">Contacto</Link>
          </div>
        </div>
        <MeshPillarNav />
      </div>
    </footer>
  );
}
