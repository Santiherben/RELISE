import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, Shield, FileText, ArrowRight, BookOpen } from 'lucide-react';
import networkData from '../data/network.json';

export default function AboutSection({ onOpenActa }) {
  const strategicObjectives = [
    {
      title: "Producción Científica Colaborativa",
      desc: "Promover investigaciones conjuntas que deriven en publicaciones indexadas, libros colectivos, memorias académicas y productos científicos de alcance regional e internacional.",
      color: "from-relise-red-500 to-amber-500"
    },
    {
      title: "Formación e Intercambio Académico",
      desc: "Desarrollar disertaciones mensuales, seminarios, webinars, congresos y espacios permanentes de reflexión interdisciplinaria.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Incidencia Regional en Políticas Públicas",
      desc: "Generar aportes académicos y documentos orientados al fortalecimiento de políticas públicas educativas y sociales en América Latina.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Internacionalización y Redes de Cooperación",
      desc: "Fortalecer la cooperación entre universidades, centros de investigación y organismos educativos de distintos países.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Innovación Educativa y Tecnologías Digitales",
      desc: "Impulsar investigaciones vinculadas a tecnologías digitales, inteligencia artificial, inclusión educativa, ciudadanía digital y transformación pedagógica.",
      color: "from-amber-500 to-relise-red-500"
    }
  ];

  return (
    <section id="identidad" className="py-24 bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white border-y border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-200">
      
      {/* Background soft ambient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-relise-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            Identidad Institucional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Fundamentos & Propósito Regional
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            RELISE nace para superar barreras geográficas y articular saberes pedagógicos, tecnológicos y sociales ante los desafíos de América Latina.
          </p>
        </div>

        {/* Misión, Visión & Acta Banner in rich cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Misión Card */}
          <div className="bg-white dark:bg-slate-950/80 p-8 rounded-3xl border border-slate-200 dark:border-relise-red-900/40 hover:border-relise-red-500/60 shadow-lg dark:shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-relise-red-500/10 dark:bg-relise-red-500/20 text-relise-red-600 dark:text-relise-red-400 flex items-center justify-center mb-6 border border-relise-red-500/20 dark:border-relise-red-500/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>Misión</span>
              <span className="text-xs font-bold text-relise-red-600 dark:text-relise-red-400 uppercase tracking-widest">• Propósito</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Articular esfuerzos de investigación social y educativa en América Latina mediante el trabajo colaborativo entre investigadores, docentes e instituciones, promoviendo la producción científica, la formación continua y la transformación educativa desde perspectivas éticas, inclusivas e interdisciplinarias.
            </p>
          </div>

          {/* Visión Card */}
          <div className="bg-white dark:bg-slate-950/80 p-8 rounded-3xl border border-slate-200 dark:border-blue-900/40 hover:border-blue-500/60 shadow-lg dark:shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20 dark:border-blue-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span>Visión</span>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">• Horizonte</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Consolidarse como una red latinoamericana de referencia académica en investigación social y educativa, reconocida por su contribución científica, su compromiso con la transformación social y su capacidad de articulación regional e internacional.
            </p>
          </div>

          {/* Acta Callout */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-8 rounded-3xl border border-amber-300 dark:border-amber-500/30 hover:border-amber-400 shadow-lg dark:shadow-xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 border border-amber-500/30">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Acta Constitutiva Oficial</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-6">
                Consulte el documento fundacional formal aprobado en asamblea regional con los 15 estatutos, nodos fundadores y compromisos éticos.
              </p>
            </div>
            <button
              onClick={onOpenActa}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-white rounded-xl transition-all cursor-pointer shadow-md"
            >
              <span>Explorar Acta Constitutiva</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Principios Rectores */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Principios Rectores de RELISE</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Ejes éticos y metodológicos innegociables de la red</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {networkData.principles.map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-950/70 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.name}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Objetivos Estratégicos */}
        <div className="bg-white dark:bg-slate-950/80 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Objetivos Estratégicos Institucionales</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Plan de acción de impacto regional acordado por los miembros</p>
          </div>

          <div className="space-y-4">
            {strategicObjectives.map((obj, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-r ${obj.color} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{obj.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
