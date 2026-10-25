import React, { useState } from 'react';
import { Cpu, HeartHandshake, Scale, Leaf, Users, Smile, BookOpen, ArrowRight, UserCheck } from 'lucide-react';
import networkData from '../data/network.json';

const iconMap = {
  Cpu: Cpu,
  HeartHandshake: HeartHandshake,
  Scale: Scale,
  Leaf: Leaf,
  Users: Users,
  Smile: Smile,
};

export default function ResearchLinesSection({ onSelectFilter }) {
  const [activeLine, setActiveLine] = useState(networkData.researchLines[0].id);

  return (
    <section id="lineas" className="py-24 bg-white dark:bg-[#0a192f] text-slate-900 dark:text-white border-y border-slate-200 dark:border-blue-950/60 relative overflow-hidden transition-colors duration-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            Ejes Temáticos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Líneas de Investigación Prioritarias
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Abordamos los problemas estructurales y emergentes de la educación y la sociedad latinoamericana mediante una perspectiva interdisciplinaria y crítica.
          </p>
        </div>

        {/* Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networkData.researchLines.map((line) => {
            const Icon = iconMap[line.icon] || BookOpen;
            const isSelected = activeLine === line.id;

            return (
              <div
                key={line.id}
                onMouseEnter={() => setActiveLine(line.id)}
                className={`rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/70 dark:bg-[#0e274a] border-blue-400 shadow-xl dark:shadow-2xl scale-[1.02]'
                    : 'bg-slate-50 dark:bg-[#0c213d]/80 border-slate-200 dark:border-blue-900/40 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-[#0e274a]/80 shadow-xs dark:shadow-none'
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-500/30 shadow-xs dark:shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                    {line.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {line.description}
                  </p>
                </div>

                {/* Coordinator & Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-blue-900/50">
                  <div className="flex items-center gap-2 mb-3">
                    <UserCheck className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {line.coordinator}
                    </span>
                  </div>

                  <a
                    href="#equipo"
                    onClick={() => onSelectFilter && onSelectFilter(line.title.split(' ')[0])}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Ver investigadores en esta línea</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interdisciplinary Banner in rich navy */}
        <div className="mt-14 bg-gradient-to-r from-[#0d2242] via-[#0f294e] to-[#0d2242] rounded-3xl p-8 sm:p-12 border border-blue-500/30 shadow-2xl relative overflow-hidden text-white">
          <div className="max-w-3xl relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4 inline-block">
              Producción 2026
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Libro Colectivo & Disertaciones RELISE 2026
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Los miembros de todos los nodos participan en el ciclo mensual de disertaciones virtuales sobre temas de interés regional y la compilación de un libro con memorias académicas y capítulos científicos dictaminados por pares.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#eventos"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-bold transition-all shadow-lg cursor-pointer"
              >
                Ver Cronograma de Disertaciones
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
