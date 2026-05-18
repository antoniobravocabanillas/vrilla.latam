"use client";

import { motion } from "framer-motion";

export function BrokenSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 surface-panel">
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/40 to-transparent" />
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">{label}</p>
        <span className="rounded-full border border-rose-200/20 bg-rose-200/10 px-2 py-1 text-[10px] text-rose-100">fricción</span>
      </div>
      <p className="mt-7 text-lg tracking-[-0.02em] text-white">{value}</p>
      <div className="mt-5 flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((item) => (
          <motion.span
            key={item}
            className="h-1 flex-1 rounded-full bg-rose-100/20"
            animate={{ opacity: [0.25, item % 2 === 0 ? 0.8 : 0.45, 0.25] }}
            transition={{ duration: 2.4, delay: item * 0.18, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

export function LayerBridge() {
  return (
    <div className="relative hidden h-px bg-white/10 lg:block">
      <motion.div
        className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-transparent via-cyan-100 to-transparent"
        animate={{ x: ["-20%", "380%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function MiniArchitecture({
  label,
  metrics,
}: {
  label: string;
  metrics: string[];
}) {
  return (
    <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{label}</p>
      <div className="mt-4 grid gap-2">
        {metrics.map((metric, index) => (
          <div key={metric} className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-cyan-100/80" />
            <div className="h-1.5 flex-1 rounded-full bg-white/8">
              <motion.div
                className="h-1.5 rounded-full bg-white/60"
                animate={{ width: [`${35 + index * 15}%`, `${72 - index * 6}%`, `${35 + index * 15}%`] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[11px] text-slate-400">{metric}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PipelineRail({ steps }: { steps: string[] }) {
  return (
    <div className="relative mt-10 grid gap-4 lg:grid-cols-5">
      <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/10 lg:block">
        <motion.div
          className="h-px w-40 bg-gradient-to-r from-transparent via-cyan-100 to-transparent"
          animate={{ x: ["-10%", "530%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {steps.map((step, index) => (
        <article key={step} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 surface-panel">
          <span className="absolute -top-2 left-5 rounded-full border border-cyan-100/20 bg-cyan-100/10 px-2 py-1 font-mono text-[10px] text-cyan-50">
            0{index + 1}
          </span>
          <p className="mt-8 text-lg leading-7">{step}</p>
        </article>
      ))}
    </div>
  );
}
