import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, FileText, Sparkles, ChevronDown, BookOpen } from 'lucide-react';
import networkData from '../data/network.json';

export default function Hero({ onOpenActa }) {
  const [scrollY, setScrollY] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax subtle background movement
  const logoOpacity = Math.max(0.04, 0.16 - scrollY * 0.0003);
  const logoTranslateY = scrollY * 0.18;

  // Dynamic 3D rotation based on scroll & mouse interaction
  const scrollRotateY = (scrollY * 0.24) % 360;
  const scrollRotateX = Math.min(18, scrollY * 0.04);
  
  const currentRotateX = isHovered ? mouseTilt.y : scrollRotateX;
  const currentRotateY = isHovered ? mouseTilt.x + scrollRotateY : scrollRotateY;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 26;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -26;
    setMouseTilt({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-[#06101e] via-[#0a192f] to-[#09182d] text-white overflow-hidden flex flex-col justify-center min-h-[92vh]">
      
      {/* Background Soft Parallax Watermark Emblem */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10 select-none overflow-hidden"
        style={{
          transform: `translateY(${logoTranslateY}px) rotate(${scrollY * 0.05}deg)`,
          opacity: logoOpacity,
          transition: 'opacity 0.15s ease-out'
        }}
      >
        <div className="w-[650px] h-[650px] lg:w-[850px] lg:h-[850px] flex items-center justify-center">
          <img
            src="/logo/logoOficialRELISE_transparent.png"
            alt="Logo RELISE Fondo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_100px_rgba(59,130,246,0.3)]"
          />
        </div>
      </div>

      {/* Radiant ambient glow spotlights in navy, red & teal hues */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-relise-red-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[650px] h-[650px] bg-blue-500/20 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-auto">
        
        {/* Prominent Official Logo Showcase with Scroll 3D Rotation, Tilt & Chromatic Aura */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div 
            className="relative group cursor-pointer animate-float-logo"
            onClick={() => window.scrollTo({ top: 650, behavior: 'smooth' })}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            {/* Dynamic Chromatic Aura that shifts through the colors of Latin American flags */}
            <div className="absolute -inset-10 rounded-full blur-3xl animate-chroma-aura opacity-75 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Logo Card with 3D perspective rotation on Scroll and Mouse */}
            <div 
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-[350px] lg:h-[350px] rounded-3xl p-3 sm:p-5 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.5),0_0_60px_rgba(255,255,255,0.45)] ring-4 sm:ring-8 ring-white/80 border-2 border-white flex items-center justify-center transition-transform duration-150 ease-out"
              style={{
                transform: `rotateY(${currentRotateY}deg) rotateX(${currentRotateX}deg) scale(${isHovered ? 1.05 : 1})`,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="/logo/logoOficialRELISE_transparent.png"
                alt="Emblema Oficial RELISE"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
          </div>

          {/* 360° Revolving Flags Orbit of Represented Countries (Icon-only miniature medals) */}
          <div className="relative w-full max-w-xl mx-auto h-16 my-3 flex items-center justify-center orbit-3d-scene">
            
            {/* Subtle Glowing Orbit Ring Guideline */}
            <div className="absolute w-[280px] sm:w-[360px] md:w-[420px] h-[30px] sm:h-[40px] rounded-[100%] border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.25)] pointer-events-none -z-10" />

            {/* 360° Orbiting Track */}
            <div className="relative w-0 h-0 orbit-3d-track flex items-center justify-center">
              {networkData.countries.map((country, idx) => {
                const angle = (360 / networkData.countries.length) * idx;
                return (
                  <div
                    key={country.code}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-3d-item"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(var(--orbit-distance))`
                    }}
                  >
                    <a
                      href="#nodos"
                      className="orbit-3d-counter block group/flag focus:outline-none"
                      title={`Nodo ${country.name} - Ver investigadores e instituciones`}
                    >
                      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/95 hover:bg-slate-900 border-2 border-white/70 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-130 flex items-center justify-center cursor-pointer group-hover/flag:ring-4 group-hover/flag:ring-blue-400/50">
                        <img
                          src={`/flags/${country.code.toLowerCase()}.png`}
                          alt={`Bandera de ${country.name}`}
                          className="w-5 h-3.5 sm:w-6 sm:h-4 object-cover rounded-xs shadow-sm"
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-white text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider mt-1 shadow-xl backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="bg-gradient-to-r from-relise-red-600 via-blue-700 to-emerald-700 bg-clip-text text-transparent font-extrabold">Red Latinoamericana de Investigación Social y Educativa</span>
          </div>
        </div>

        {/* Hero Title with Dual-Color Brand Focus: REL (Red) + ISE (Blue) */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white mb-6">
          <span className="text-relise-red-500 drop-shadow-[0_0_40px_rgba(220,38,38,0.45)]">REL</span>
          <span className="text-blue-400 drop-shadow-[0_0_40px_rgba(96,165,250,0.45)]">ISE</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 max-w-4xl mx-auto tracking-tight leading-snug mb-6">
          Construyendo conocimiento colaborativo, interdisciplinario y transformador en América Latina
        </h2>

        {/* Narrative description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Articulamos esfuerzos de investigación científica, innovación pedagógica e inclusión social entre nodos académicos de{' '}
          <strong className="text-white font-semibold">
            Uruguay, Colombia, Costa Rica, México, Perú y Chile
          </strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#equipo"
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-relise-red-600 via-relise-red-500 to-blue-600 hover:from-relise-red-500 hover:to-blue-500 rounded-2xl shadow-xl shadow-relise-red-500/25 hover:shadow-blue-500/35 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Users className="w-4 h-4" />
            <span>Explorar Investigadores</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenActa}
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold text-slate-200 bg-[#0d2242]/90 hover:bg-[#112d54] rounded-2xl border border-blue-500/30 shadow-xl backdrop-blur-xl transition-all hover:scale-[1.03] cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Ver Acta Constitutiva Oficial</span>
          </button>
        </div>

        {/* Key Metrics Bar in rich navy container */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto bg-[#0d2242]/80 p-5 sm:p-7 rounded-3xl border border-blue-500/20 shadow-2xl backdrop-blur-xl">
          {networkData.stats.map((stat, idx) => (
            <div key={idx} className="p-3 text-center border-r last:border-r-0 border-blue-900/40">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-relise-red-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-blue-200/70 mt-0.5">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center gap-1.5 text-xs text-blue-300/70 animate-bounce">
          <span>Desliza para explorar los ejes y nodos</span>
          <ChevronDown className="w-4 h-4 text-blue-400" />
        </div>

      </div>
    </section>
  );
}
