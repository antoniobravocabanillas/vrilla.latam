"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.992 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.74, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl space-y-4"
      style={{ willChange: "transform, opacity" }}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const initialOffset = {
    up: { x: 0, y: 28 },
    left: { x: -32, y: 12 },
    right: { x: 32, y: 12 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset, scale: 0.988, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.78, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

export function PremiumLink({
  href,
  children,
  subtle = false,
}: {
  href: string;
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300",
        subtle
          ? "border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-200/30 hover:bg-white/[0.07]"
          : "border-cyan-100/20 bg-cyan-100 text-slate-950 hover:-translate-y-0.5 hover:bg-white",
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
