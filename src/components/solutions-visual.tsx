"use client";

import { motion, MotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const architectureNodes = [
  { label: "Demanda", x: "8%", y: "20%" },
  { label: "Ventas", x: "34%", y: "20%" },
  { label: "Operación", x: "58%", y: "42%" },
  { label: "Dirección", x: "80%", y: "18%" },
  { label: "BI", x: "78%", y: "68%" },
];

export function SolutionsArchitecture() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel">
      <div className="noise-mask absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          "M12 24 C 24 24, 28 22, 38 24",
          "M38 24 C 48 25, 54 33, 58 43",
          "M58 43 C 67 39, 73 28, 80 22",
          "M58 43 C 68 51, 74 61, 79 69",
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="rgba(196,243,255,.8)"
            strokeWidth="0.55"
            strokeDasharray="4 4"
            animate={{ opacity: [0.2, 1, 0.2], pathLength: [0.2, 1, 0.2] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
      {architectureNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute rounded-2xl border border-white/10 bg-black/25 px-3 py-3 text-sm backdrop-blur-md"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {node.label}
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
        {["Entrada", "Sistema", "Control"].map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{item}</p>
            <motion.div
              className="mt-3 h-1.5 rounded-full bg-cyan-100/75"
              animate={{ width: [`${38 + index * 12}%`, `${76 - index * 7}%`, `${38 + index * 12}%`] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionModuleVisual({
  kind,
}: {
  kind: "positioning" | "operations" | "commercial" | "infrastructure";
}) {
  const content = {
    positioning: ["Señal", "Autoridad", "Confianza"],
    operations: ["Flujo", "Trazabilidad", "Control"],
    commercial: ["Entrada", "Seguimiento", "Conversión"],
    infrastructure: ["Nodos", "Integración", "Escala"],
  }[kind];

  return (
    <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
      <div className="grid gap-3">
        {content.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <motion.span
              className="size-2 rounded-full bg-cyan-100"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.5, delay: index * 0.2, repeat: Infinity }}
            />
            <div className="h-px flex-1 bg-white/10">
              <motion.div
                className="h-px bg-cyan-100/80"
                animate={{ width: ["22%", "88%", "22%"] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-xs text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

type SolutionModule = {
  title: string;
  trigger: string;
  change: string;
  kind: "positioning" | "operations" | "commercial" | "infrastructure";
};

const moduleCodes = {
  positioning: "AUTH",
  operations: "OPS",
  commercial: "CRM",
  infrastructure: "CORE",
};

export function SolutionModulesShowcase({ modules }: { modules: SolutionModule[] }) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(modules.length - 1, Math.max(0, Math.floor(latest * modules.length)));
    setActive(next);
  });

  return (
    <section ref={ref} className="container-shell pb-24">
      <div className="lg:hidden">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Módulos</p>
        <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
          Cuatro transformaciones. Cuatro fallas estructurales resueltas.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          No eliges un paquete decorativo. Identificamos qué capa está frenando la empresa y diseñamos la intervención adecuada.
        </p>
        <div className="mt-10 grid gap-4">
          {modules.map((solution, index) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 26, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[1.9rem] border border-white/10 p-6 surface-panel"
            >
              <SolutionModuleContent solution={solution} index={index} />
            </motion.article>
          ))}
        </div>
      </div>

      <div className="relative hidden h-[430vh] lg:block">
        <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center overflow-hidden">
          <div className="grid w-full gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Módulos</p>
              <h2 className="mt-5 max-w-3xl text-balance text-5xl font-medium tracking-[-0.055em] text-white xl:text-6xl">
                Cuatro transformaciones. Cuatro fallas estructurales resueltas.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                No eliges un paquete decorativo. Identificamos qué capa está frenando la empresa y diseñamos la intervención adecuada.
              </p>

              <div className="mt-10 flex gap-5">
                <div className="h-44 w-px overflow-hidden rounded-full bg-white/10">
                  <motion.div className="w-full rounded-full bg-cyan-100/80" style={{ height: progressHeight }} />
                </div>
                <div className="grid content-between py-1">
                  {modules.map((module, index) => (
                    <div
                      key={module.title}
                      className={`text-left font-mono text-[10px] uppercase tracking-[0.2em] transition ${
                        active === index ? "text-cyan-100" : "text-slate-600"
                      }`}
                    >
                      0{index + 1} · {moduleCodes[module.kind]}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[620px] [perspective:1800px]">
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,rgba(147,232,255,0.16),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)] blur-2xl" />
              <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-100/35 to-transparent" />
              {modules.map((solution, index) => (
                <ScrollModuleCard
                  key={solution.title}
                  solution={solution}
                  index={index}
                  total={modules.length}
                  progress={scrollYProgress}
                  reduced={Boolean(prefersReducedMotion)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollModuleCard({
  solution,
  index,
  total,
  progress,
  reduced,
}: {
  solution: SolutionModule;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const segment = 1 / total;
  const center = (index + 0.5) * segment;
  const enter = Math.max(0, center - segment * 0.92);
  const exit = Math.min(1, center + segment * 0.92);
  const first = index === 0;
  const last = index === total - 1;
  const opacity = useTransform(progress, [enter, center, exit], first ? [1, 1, 0] : last ? [0, 1, 1] : [0, 1, 0]);
  const x = useTransform(progress, [enter, center, exit], reduced ? [0, 0, 0] : first ? [0, 0, -220] : last ? [220, 0, 0] : [220, 0, -220]);
  const y = useTransform(progress, [enter, center, exit], reduced ? [0, 0, 0] : first ? [0, 0, -46] : last ? [72, 0, 0] : [72, 0, -46]);
  const scale = useTransform(progress, [enter, center, exit], reduced ? [1, 1, 1] : first ? [1, 1, 0.9] : last ? [0.86, 1, 1] : [0.86, 1, 0.9]);
  const rotateY = useTransform(progress, [enter, center, exit], reduced ? [0, 0, 0] : first ? [0, 0, -22] : last ? [22, 0, 0] : [22, 0, -22]);
  const rotateX = useTransform(progress, [enter, center, exit], reduced ? [0, 0, 0] : first ? [0, 0, -4] : last ? [4, 0, 0] : [4, 0, -4]);

  return (
    <motion.article
      style={{ opacity, x, y, scale, rotateY, rotateX, zIndex: total - index }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-[2.4rem] border border-white/12 p-8 surface-panel [transform-style:preserve-3d]"
    >
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-200/12 blur-3xl" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/55 to-transparent" />
      <SolutionModuleContent solution={solution} index={index} />
    </motion.article>
  );
}

function SolutionModuleContent({ solution, index }: { solution: SolutionModule; index: number }) {
  return (
    <>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">
            Transformación 0{index + 1} · {moduleCodes[solution.kind]}
          </p>
          <h3 className="mt-5 max-w-2xl text-3xl tracking-[-0.045em] text-white lg:text-4xl">{solution.title}</h3>
        </div>
        <span className="hidden rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100/65 xl:block">
          System module
        </span>
      </div>
      <div className="mt-8 grid gap-5 xl:grid-cols-2">
        <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Se activa cuando</p>
          <p className="mt-3 leading-7 text-slate-300">{solution.trigger}</p>
        </div>
        <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Qué cambia</p>
          <p className="mt-3 leading-7 text-slate-100">{solution.change}</p>
        </div>
      </div>
      <SolutionModuleVisual kind={solution.kind} />
    </>
  );
}
