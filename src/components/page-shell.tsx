import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-18 lg:pt-20">{children}</main>
      <SiteFooter />
    </>
  );
}
