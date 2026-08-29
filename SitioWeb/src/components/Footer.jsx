import React from 'react';
import { Globe2, FileText, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenActa }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl bg-white p-1.5 shadow-md border border-white/90 flex items-center justify-center">
                <img src="./logo/logoOficialRELISE_transparent.png" alt="Logo RELISE" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">
                <span className="text-relise-red-500">REL</span>
                <span className="text-blue-400">ISE</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong>Red Latinoamericana de Investigación Social y Educativa.</strong> Un espacio internacional e interdisciplinario para la producción científica, la cooperación horizontal y la innovación pedagógica en América Latina.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400">
              <Globe2 className="w-4 h-4" />
              <span>Nodos en Uruguay, Colombia, Costa Rica, México, Perú y Chile</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#identidad" className="hover:text-white transition-colors">Identidad Institucional</a></li>
              <li><a href="#nodos" className="hover:text-white transition-colors">Nodos Regionales</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Directorio de Investigadores</a></li>
              <li><a href="#lineas" className="hover:text-white transition-colors">Líneas de Investigación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Producción & Red
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#publicaciones" className="hover:text-white transition-colors">Publicaciones & DOIs</a></li>
              <li><a href="#eventos" className="hover:text-white transition-colors">Disertaciones 2026</a></li>
              <li><a href="#eventos" className="hover:text-white transition-colors">Libro Colectivo de Memorias</a></li>
              <li>
                <button
                  onClick={onOpenActa}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer text-blue-400 font-semibold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Acta Constitutiva</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} RELISE. Todos los derechos reservados. Conocimiento abierto para América Latina.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
