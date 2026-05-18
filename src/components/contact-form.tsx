export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[2rem] border border-white/10 p-5 surface-panel sm:grid-cols-2 sm:p-6">
      {[
        ["Nombre", "Tu nombre completo"],
        ["Empresa", "Razón social"],
        ["Industria", "Ej. topografía"],
        ["Cargo", "Ej. gerente general"],
        ["WhatsApp", "+51 ..."],
        ["Email", "correo@empresa.com"],
      ].map(([label, placeholder]) => (
        <label key={label} className="space-y-2 text-sm text-slate-300">
          <span>{label}</span>
          <input
            placeholder={placeholder}
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/40"
          />
        </label>
      ))}
      <label className="space-y-2 text-sm text-slate-300 sm:col-span-2">
        <span>Problema principal</span>
        <textarea
          placeholder="¿Dónde se rompe hoy tu operación: ventas, trazabilidad, coordinación, reportes, dependencia del fundador...?"
          className="min-h-32 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/40"
        />
      </label>
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-400 sm:col-span-2">
        Recibimos tu contexto, revisamos la operación y proponemos la siguiente conversación con criterio consultivo. Respuesta inicial estimada: 48 h.
      </div>
      <button className="mt-2 h-13 rounded-2xl bg-cyan-100 px-5 font-medium text-slate-950 transition hover:bg-white sm:col-span-2">
        Solicitar diagnóstico operacional
      </button>
    </form>
  );
}
