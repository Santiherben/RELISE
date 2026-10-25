import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  HeartHandshake, 
  Scale, 
  Leaf, 
  Network, 
  Play, 
  Pause,
  BookOpen
} from 'lucide-react';

export default function InnovationExperienceSlider({ onOpenActa }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 'ia',
      theme: 'Tecnología & Futuro',
      title: 'Inteligencia Artificial & Transformación Docente',
      tagline: 'Modelos de Lenguaje (LLM) y Didáctica Computacional',
      accentColor: 'from-relise-red-600 via-relise-red-500 to-amber-500',
      badgeBg: 'bg-relise-red-500/20 text-relise-red-300 border-relise-red-500/40',
      glowColor: 'bg-relise-red-600/20',
      icon: Cpu,
      summary: 'Investigamos el impacto ético y didáctico de la Inteligencia Artificial Generativa en la formación docente en Uruguay y la región, generando marcos pedagógicos para su adopción crítica en el aula.',
      metrics: [
        { label: 'Proyectos Activos', value: '3+' },
        { label: 'Países en Estudio', value: 'UY • CO • MX' },
        { label: 'Enfoque', value: 'Ético & Crítico' }
      ],
      quote: '"La IA no reemplaza la pedagogía; exige repensar el sentido mismo del acto de educar."',
      quoteAuthor: 'Nodo Uruguay • RELISE'
    },
    {
      id: 'inclusion',
      theme: 'Derechos & Accesibilidad',
      title: 'Educación Inclusiva, LSU & Ambientes Sin Barreras',
      tagline: 'Lengua de Señas, Cultura Sorda y Diversidad Humana',
      accentColor: 'from-blue-600 via-indigo-600 to-blue-800',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      glowColor: 'bg-blue-600/20',
      icon: HeartHandshake,
      summary: 'Desarrollamos investigaciones pioneras en traducción e interpretación LSU-Español, accesibilidad digital y diseño de entornos de aprendizaje inclusivos para comunidades con diversidad funcional.',
      metrics: [
        { label: 'Publicaciones', value: 'Capítulos 2024' },
        { label: 'Comunidad', value: 'Estudios Sordos' },
        { label: 'Impacto', value: 'Accesibilidad 100%' }
      ],
      quote: '"La accesibilidad no es una concesión, es un derecho humano fundamental en la educación."',
      quoteAuthor: 'Equipo de Accesibilidad • UdelaR / CFE'
    },
    {
      id: 'politicas',
      theme: 'Justicia Social',
      title: 'Políticas Públicas con Enfoque de Género',
      tagline: 'Incidencia en Comunidades y Derechos Humanos',
      accentColor: 'from-purple-600 via-pink-600 to-relise-red-600',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      glowColor: 'bg-purple-600/20',
      icon: Scale,
      summary: 'Formulación y evaluación de políticas públicas orientadas a mujeres víctimas de violencia, comunidades en vulnerabilidad extrema y programas de equidad de género en Colombia y América Latina.',
      metrics: [
        { label: 'Políticas Evaluadas', value: '4 Ejes' },
        { label: 'Poblaciones', value: 'Comunidades Base' },
        { label: 'Alcance', value: 'Nivel Regional' }
      ],
      quote: '"La investigación cobra sentido cuando transforma las realidades cotidianas de los más vulnerables."',
      quoteAuthor: 'Nodo Colombia • RELISE'
    },
    {
      id: 'ambiente',
      theme: 'Biodiversidad & Ciencia',
      title: 'Educación Ambiental & Recursos Naturales',
      tagline: 'Etnozoología y Didáctica Científica a Distancia',
      accentColor: 'from-emerald-600 via-teal-600 to-blue-700',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      glowColor: 'bg-emerald-600/20',
      icon: Leaf,
      summary: 'Innovación en mediación pedagógica de giras de campo virtuales, conservación de fauna silvestre costarricense y desarrollo de series didácticas audiovisuales abiertas para la enseñanza de las ciencias.',
      metrics: [
        { label: 'Series Didácticas', value: '5 Audiovisuales' },
        { label: 'Institución', value: 'UNED Costa Rica' },
        { label: 'Especialidad', value: 'Fauna & Ecología' }
      ],
      quote: '"Conocer la biodiversidad de nuestra tierra es el primer paso para protegerla."',
      quoteAuthor: 'Cátedra de Ciencias Naturales • Costa Rica'
    },
    {
      id: 'red',
      theme: 'Integración Regional',
      title: 'Red Latinoamericana de Conocimiento Abierto',
      tagline: 'Disertaciones Mensuales & Libro Colectivo 2026',
      accentColor: 'from-amber-500 via-relise-red-600 to-blue-800',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      glowColor: 'bg-amber-600/20',
      icon: Network,
      summary: 'Suscrita en marzo de 2026 por investigadores de 6 países, RELISE consolida un espacio permanente de construcción colegiada, evaluación por pares y publicaciones científicas abiertas.',
      metrics: [
        { label: 'Nodos Activos', value: '6 Países' },
        { label: 'Investigadores', value: '11+ Fundadores' },
        { label: 'Memorias 2026', value: 'Libro Colectivo' }
      ],
      quote: '"La ciencia no tiene fronteras cuando se construye desde la solidaridad y la reciprocidad."',
      quoteAuthor: 'Acta Constitutiva • RELISE 2026'
    }
  ];

  // Auto-advance timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentSlide((curr) => (curr + 1) % slides.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleSelectSlide = (idx) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((curr) => (curr + 1) % slides.length);
    setProgress(0);
  };

  const current = slides[currentSlide];
  const IconComponent = current.icon;

  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden select-none border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      
      {/* Dynamic Background Glow without clipping image */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] transition-all duration-1000 ${current.glowColor}`} 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-relise-red-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Experiencia Interactiva • Fronteras de Investigación
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Ejes Estratégicos & Desafíos Regionales
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white text-lg">0{currentSlide + 1}</strong> / 0{slides.length}
            </span>

            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/90 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Anterior eje"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={isPlaying ? "Pausar reproducción" : "Reanudar reproducción"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Siguiente eje"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
          
          {/* Left Column: Context & Headlines */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/80 text-xs font-bold shadow-xs backdrop-blur-md">
              <span className={`px-2.5 py-0.5 rounded-full ${current.badgeBg}`}>
                {current.theme}
              </span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">{current.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              {current.title}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {current.summary}
            </p>

            {/* Researcher Quote */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md max-w-xl shadow-md dark:shadow-lg">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                {current.quote}
              </p>
              <span className="text-[11px] font-semibold text-relise-red-600 dark:text-relise-red-400 block mt-1.5">
                — {current.quoteAuthor}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#equipo"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r ${current.accentColor} hover:opacity-95 shadow-lg transition-all hover:scale-[1.02] cursor-pointer`}
              >
                <span>Explorar Investigadores de este Eje</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#publicaciones"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Producción Científica</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Metrics & Graphic Card (No overlapping background images) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/90 dark:to-slate-950/95 p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${current.accentColor} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-white dark:bg-slate-950 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white">
                    <IconComponent className="w-8 h-8 text-slate-900 dark:text-white" />
                  </div>
                </div>

                <span className="font-black text-5xl text-slate-200 dark:text-slate-800 select-none">
                  0{currentSlide + 1}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {current.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 text-center shadow-xs">
                    <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status footer */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <span>Nodo Internacional Activo</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">RELISE • 2026</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Timeline Navigator */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {slides.map((s, idx) => {
              const isCurrent = currentSlide === idx;
              return (
                <div
                  key={s.id}
                  onClick={() => handleSelectSlide(idx)}
                  className={`cursor-pointer p-3.5 rounded-2xl transition-all duration-300 border ${
                    isCurrent
                      ? 'bg-white dark:bg-slate-900 border-blue-400 dark:border-slate-700 shadow-md ring-1 ring-blue-500/20 dark:ring-white/10'
                      : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-2.5">
                    <div
                      className={`h-full transition-all duration-100 ${
                        isCurrent
                          ? `bg-gradient-to-r ${s.accentColor} w-full`
                          : idx < currentSlide
                          ? 'bg-slate-400 dark:bg-slate-600 w-full'
                          : 'w-0'
                      }`}
                      style={isCurrent ? { width: `${progress}%` } : {}}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    <span>0{idx + 1}</span>
                    <span className={isCurrent ? 'text-blue-600 dark:text-white font-extrabold' : ''}>{s.theme}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {s.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
