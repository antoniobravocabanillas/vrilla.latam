"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

const fields = [
  { label: "Nombre", name: "name", placeholder: "Tu nombre completo", type: "text" },
  { label: "Empresa", name: "company", placeholder: "Razón social", type: "text" },
  { label: "Cargo", name: "role", placeholder: "Ej. gerente general", type: "text" },
  { label: "Email", name: "email", placeholder: "correo@empresa.com", type: "email" },
  { label: "WhatsApp", name: "whatsapp", placeholder: "+51 ...", type: "tel" },
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("Integraremos CRM, Make o Slack cuando existan credenciales. El endpoint ya queda preparado.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitState("loading");
    setMessage("Registrando solicitud de diagnóstico...");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "vrilla-landing",
          path: window.location.pathname,
          utm: window.location.search,
          referrer: document.referrer,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error ?? "No pudimos registrar la solicitud.");
      }

      setSubmitState("success");
      setMessage("Solicitud recibida. Prepararemos una primera lectura operacional antes de contactarte.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "Ocurrió un error. Intenta nuevamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-white/10 p-5 surface-panel sm:grid-cols-2 sm:p-6">
      {fields.map((field) => (
        <label key={field.name} className="space-y-2 text-sm text-slate-300">
          <span>{field.label}</span>
          <input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required
            autoComplete={field.name === "email" ? "email" : field.name === "name" ? "name" : "organization"}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/40"
          />
        </label>
      ))}
      <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
        <span>Principal desafío</span>
        <textarea
          name="challenge"
          required
          minLength={12}
          placeholder="¿Qué quieres mejorar: control operativo, seguimiento comercial, automatización, datos, reportes, dependencia de personas clave...?"
          className="min-h-32 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/40"
        />
      </label>
      <div
        className={`rounded-2xl border p-4 text-sm leading-6 sm:col-span-2 ${
          submitState === "success"
            ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-50"
            : submitState === "error"
              ? "border-rose-300/20 bg-rose-300/10 text-rose-50"
              : "border-white/10 bg-black/20 text-slate-400"
        }`}
        aria-live="polite"
      >
        {message}
      </div>
      <button
        type="submit"
        disabled={submitState === "loading"}
        className="mt-2 h-14 rounded-2xl border border-cyan-100/30 bg-cyan-100 px-6 font-medium text-slate-950 shadow-[0_0_34px_rgba(207,250,254,0.17)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_52px_rgba(207,250,254,0.24)] disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
      >
        {submitState === "loading" ? "Enviando diagnóstico..." : "Solicitar Diagnóstico"}
      </button>
    </form>
  );
}
