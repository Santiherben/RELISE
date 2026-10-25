import React from 'react';
import { Calendar, Video, Sparkles, ArrowRight } from 'lucide-react';
import eventsData from '../data/events.json';

export default function EventsSection() {
  return (
    <section id="eventos" className="py-24 bg-white dark:bg-[#09182d] text-slate-900 dark:text-white border-t border-slate-200 dark:border-blue-950/60 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            Agenda Académica
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Congresos, Disertaciones & Encuentros
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Espacios de debate, socialización científica y formación continua organizados por RELISE y sus universidades aliadas.
          </p>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {eventsData.map((ev) => (
            <div
              key={ev.id}
              className="bg-slate-50 dark:bg-[#0c213d]/90 rounded-3xl p-7 border border-slate-200 dark:border-blue-500/20 shadow-xs dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-400/50 transition-all flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                    {ev.category}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                    {ev.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {ev.title}
                </h3>

                <div className="space-y-2 mb-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>{ev.mode}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {ev.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-blue-900/40">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>Actividad Abierta de la Red</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Congress Highlights Gallery Banner in rich navy blue */}
        <div className="bg-gradient-to-r from-[#0d2242] via-[#0f2a52] to-[#0d2242] rounded-3xl p-8 sm:p-12 border border-blue-500/30 shadow-2xl relative overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2 block">
                Comunidad en Acción
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Encuentros Internacionales y Red de Trabajo
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                A través de reuniones plenarias virtuales, simposios presenciales y foros de debate, los investigadores de RELISE articulan proyectos binacionales e internacionales con impacto real en sus sistemas educativos.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <div className="p-4 bg-[#071526]/80 rounded-2xl border border-blue-900/40">
                  <div className="text-2xl font-black text-blue-300">100%</div>
                  <div className="text-slate-400">Cooperación Abierta</div>
                </div>
                <div className="p-4 bg-[#071526]/80 rounded-2xl border border-blue-900/40">
                  <div className="text-2xl font-black text-amber-300">Mensual</div>
                  <div className="text-slate-400">Disertaciones</div>
                </div>
              </div>
            </div>

            <div className="bg-[#071526]/80 p-7 rounded-3xl border border-blue-500/20 backdrop-blur-md">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Próximas Actividades RELISE 2026</span>
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0"></span>
                  <span><strong>Marzo-Junio:</strong> Ciclo de Disertaciones sobre Modelos de Lenguaje e IA en Formación Docente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mt-1 shrink-0"></span>
                  <span><strong>Julio-Septiembre:</strong> Mesas de trabajo sobre Inclusión, LSU y Políticas Públicas de Género.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
                  <span><strong>Octubre-Noviembre:</strong> Lanzamiento del Libro Colectivo de Memorias de la Red.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
