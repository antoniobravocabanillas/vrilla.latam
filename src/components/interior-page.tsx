import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/ui-primitives";

export function InteriorPage({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="section-veil absolute inset-0" />
        <div className="container-shell relative">
          <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        </div>
      </section>
      {children}
    </PageShell>
  );
}
