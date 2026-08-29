import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenActa }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Identidad', href: '#identidad' },
    { name: 'Nodos Regionales', href: '#nodos' },
    { name: 'Investigadores', href: '#equipo' },
    { name: 'Líneas', href: '#lineas' },
    { name: 'Publicaciones', href: '#publicaciones' },
    { name: 'Eventos', href: '#eventos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 shadow-2xl backdrop-blur-md py-3 border-b border-slate-800' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Title */}
          <a href="#inicio" className="flex items-center gap-3.5 group">
            <div className="relative overflow-hidden rounded-2xl bg-white p-1.5 shadow-md border border-white/90 transition-transform group-hover:scale-105">
              <img 
                src="/logo/logoOficialRELISE_transparent.png" 
                alt="Logo RELISE" 
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl tracking-tight leading-none text-white">
                  <span className="text-relise-red-500">REL</span>
                  <span className="text-blue-400">ISE</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  América Latina
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 hidden sm:block leading-tight mt-0.5">
                Red Latinoamericana de Investigación Social y Educativa
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Acta button */}
            <button
              onClick={onOpenActa}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 rounded-xl border border-blue-800 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Acta Constitutiva</span>
            </button>
          </nav>

          {/* Theme switcher */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Alternar modo"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-400 hover:bg-slate-800 rounded-lg"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:bg-slate-800 rounded-lg"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenActa();
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-400 bg-blue-950/60 rounded-lg text-left cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Ver Acta Constitutiva</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
