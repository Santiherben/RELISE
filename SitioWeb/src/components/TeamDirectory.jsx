import React, { useState } from 'react';
import { Search, Mail, Building, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import teamData from '../data/team.json';

export default function TeamDirectory({ selectedCountry, onSelectCountry, onSelectMember }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('Todas');

  const countries = ['Todos', 'Uruguay', 'Colombia', 'Costa Rica', 'México', 'Perú', 'Chile'];

  // Filtering
  const filteredTeam = teamData.filter((member) => {
    const matchCountry = selectedCountry === 'Todos' || member.country.toLowerCase() === selectedCountry.toLowerCase();
    
    const matchSearch = searchTerm === '' || 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.areas.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      member.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchArea = selectedArea === 'Todas' || 
      member.areas.some(a => a.toLowerCase().includes(selectedArea.toLowerCase()));

    return matchCountry && matchSearch && matchArea;
  });

  return (
    <section id="equipo" className="py-24 bg-[#09182d] text-white relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-relise-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Comunidad Científica Internacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Directorio de Investigadores
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Perfiles académicos, filiaciones institucionales y trayectorias de los miembros fundadores e investigadores de RELISE en América Latina.
          </p>
        </div>

        {/* Filters and Search Bar in rich navy container */}
        <div className="bg-[#0c213d]/90 p-4 sm:p-6 rounded-3xl shadow-2xl border border-blue-500/20 backdrop-blur-xl mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-blue-300 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre, universidad, tema de investigación o país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-[#071526]/80 border border-blue-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder:text-slate-400"
              />
            </div>

            {/* Country Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => onSelectCountry(c)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCountry === c
                      ? 'bg-gradient-to-r from-relise-red-600 to-blue-600 text-white shadow-lg'
                      : 'bg-[#071526]/70 text-slate-300 hover:bg-[#102747] hover:text-white border border-blue-900/30'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400 font-medium">
          <span>Mostrando {filteredTeam.length} de {teamData.length} investigadores</span>
          {(selectedCountry !== 'Todos' || searchTerm !== '') && (
            <button
              onClick={() => {
                onSelectCountry('Todos');
                setSearchTerm('');
                setSelectedArea('Todas');
              }}
              className="text-blue-400 font-bold hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Grid of Researchers with diffused flag watermark */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="relative rounded-3xl p-6 sm:p-7 bg-[#0c213d]/90 border border-blue-500/20 shadow-xl hover:shadow-2xl hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1 backdrop-blur-xl"
            >
              {/* Diffused Country Flag in Card Background */}
              {member.flag && (
                <div className="absolute -top-6 -right-6 w-44 h-32 pointer-events-none select-none opacity-20 group-hover:opacity-30 transition-opacity duration-300 filter blur-[1px] overflow-hidden rounded-3xl">
                  <img
                    src={member.flag}
                    alt={`Bandera de ${member.country}`}
                    className="w-full h-full object-cover transform rotate-6 scale-110"
                  />
                  {/* Soft gradient mask over flag */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0c213d]/60 to-[#0c213d]" />
                </div>
              )}

              <div className="relative z-10">
                {/* Photo & Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#071526] border-2 border-blue-400/40 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-900 text-blue-200 font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {member.country}
                      </span>
                      <span className="text-[10px] text-slate-400 truncate">
                        {member.city}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white truncate group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-300 truncate mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Institution */}
                <div className="mb-4 text-xs text-slate-300 flex items-start gap-1.5 line-clamp-2">
                  <Building className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{member.institution}</span>
                </div>

                {/* Bio teaser */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Badges / Areas */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.areas.slice(0, 2).map((area, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-[#071526]/80 text-blue-200 border border-blue-900/40 truncate max-w-[200px]"
                    >
                      {area}
                    </span>
                  ))}
                  {member.areas.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded-lg text-[10px] font-medium bg-[#071526]/80 text-slate-400 border border-blue-900/40">
                      +{member.areas.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="relative z-10 pt-4 border-t border-blue-900/40 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {member.orcid && (
                    <a
                      href={member.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded-lg bg-[#A6CE39]/15 hover:bg-[#A6CE39]/30 text-[#a0ca2f] text-[11px] font-bold flex items-center gap-1 border border-[#A6CE39]/30 transition-colors"
                      title="Ver ORCID"
                    >
                      <span>ORCID</span>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1.5 rounded-lg bg-[#071526] hover:bg-blue-900/60 text-slate-300 hover:text-white border border-blue-900/30 transition-colors"
                      title="Enviar correo"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onSelectMember(member)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white text-xs font-bold transition-all border border-blue-500/30 cursor-pointer shadow-sm"
                >
                  <span>Perfil completo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
