import React, { useState } from 'react';
import { BookOpen, Search, ExternalLink, Bookmark } from 'lucide-react';
import publicationsData from '../data/publications.json';

export default function PublicationsSection() {
  const [selectedType, setSelectedType] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const types = ['Todos', 'Artículo de Revista', 'Libro', 'Capítulo de Libro', 'Recurso Audiovisual / Libro Multimedia'];

  const filteredPubs = publicationsData.filter((pub) => {
    const matchType = selectedType === 'Todos' || pub.type === selectedType;
    const matchSearch = searchTerm === '' ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.topic.toLowerCase().includes(searchTerm.toLowerCase());

    return matchType && matchSearch;
  });

  const getBadgeColor = (type) => {
    switch (type) {
      case 'Libro':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Capítulo de Libro':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Artículo de Revista':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      default:
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    }
  };

  return (
    <section id="publicaciones" className="py-24 bg-[#08162b] text-white border-t border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            Producción Científica
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Publicaciones & Productos Académicos
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Consulte la producción de artículos indexados, libros, capítulos, memorias y recursos educativos abiertos generados por los integrantes de RELISE.
          </p>
        </div>

        {/* Search & Filter bar */}
        <div className="bg-[#0c213d]/90 p-4 sm:p-6 rounded-3xl shadow-2xl border border-blue-500/20 mb-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-blue-300 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por título, autor, editorial o tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-[#071526]/80 border border-blue-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedType === t
                      ? 'bg-gradient-to-r from-relise-red-600 to-blue-600 text-white shadow-md'
                      : 'bg-[#071526]/70 text-slate-300 hover:bg-[#102747] hover:text-white border border-blue-900/30'
                  }`}
                >
                  {t === 'Recurso Audiovisual / Libro Multimedia' ? 'Audiovisual / REA' : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.map((pub) => (
            <div
              key={pub.id}
              className="bg-[#0c213d]/90 rounded-3xl p-6 sm:p-7 border border-blue-500/20 shadow-xl hover:shadow-2xl hover:border-blue-400/50 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-5 backdrop-blur-xl"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border ${getBadgeColor(pub.type)}`}>
                    {pub.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {pub.year}
                  </span>
                  <span className="text-xs text-blue-300 font-medium">
                    • {pub.topic}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs text-slate-300 font-medium mb-2.5">
                  <strong className="text-white">Autores:</strong> {pub.authors}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span><strong className="text-slate-300">Editorial / Revista:</strong> {pub.publisher}</span>
                  {pub.isbn && <span><strong>ISBN:</strong> {pub.isbn}</span>}
                  {pub.issn && <span><strong>ISSN:</strong> {pub.issn}</span>}
                </div>
              </div>

              {/* Action / Links */}
              <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-blue-900/40">
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md"
                  >
                    <span>Ver Artículo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium bg-[#071526] px-3 py-1.5 rounded-xl border border-blue-900/30">
                    <Bookmark className="w-3.5 h-3.5 text-blue-400" />
                    <span>Registro Oficial</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
