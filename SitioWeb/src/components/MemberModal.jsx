import React from 'react';
import { X, Mail, BookOpen, Award, Sparkles, Building, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import publicationsData from '../data/publications.json';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  // Find publications associated with this member (ignoring title prefixes)
  const memberPubs = publicationsData.filter(p => {
    const cleanMemberName = member.name
      .replace(/^(Dr\.|Dra\.|Mg\.|Mag\.|MSc\.|Prof\.|Esp\.)\s+/gi, '')
      .replace(/^(Dr\.|Dra\.|Mg\.|Mag\.|MSc\.|Prof\.|Esp\.)\s+/gi, '')
      .trim()
      .toLowerCase();
    const authors = p.authors.toLowerCase();
    if (authors.includes(cleanMemberName)) return true;
    const parts = cleanMemberName.split(/\s+/).filter(part => part.length > 2);
    return parts.length >= 2 && authors.includes(parts[0]) && authors.includes(parts[parts.length - 1]);
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#030914]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#0a192f] text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-500/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with diffused Flag Background */}
        <div className="h-36 bg-gradient-to-r from-relise-red-700 via-blue-900 to-[#0a192f] relative p-6 rounded-t-3xl overflow-hidden border-b border-blue-900/50">
          
          {member.flag && (
            <div className="absolute top-0 right-0 w-64 h-full pointer-events-none select-none opacity-30 filter blur-[1px]">
              <img
                src={member.flag}
                alt={`Bandera de ${member.country}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a192f]/50 to-[#0a192f]" />
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60 z-10"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Member category badge */}
          <div className="relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/30">
              {member.category}
            </span>
          </div>
        </div>

        {/* Member Header Info */}
        <div className="p-6 sm:p-8 -mt-16 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 mb-6">
            <div className="relative">
              <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-[#0a192f] shadow-2xl bg-slate-800"
              />
              {member.flag && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-2 border-[#0a192f] overflow-hidden shadow-lg">
                  <img
                    src={member.flag}
                    alt={member.country}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold text-relise-red-400 uppercase tracking-wider">
                  {member.role}
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-xs text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  {member.city}, {member.country}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {member.name}
              </h3>
              <p className="text-xs text-blue-300 font-medium mt-0.5">
                {member.title}
              </p>
            </div>
          </div>

          {/* Institution & Quick badges */}
          <div className="bg-[#0c213d] rounded-2xl p-4 mb-6 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
              <Building className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{member.institution}</span>
            </div>

            {/* Social / Academic Badges */}
            <div className="flex items-center gap-2">
              {member.orcid && (
                <a
                  href={member.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A6CE39]/15 hover:bg-[#A6CE39]/30 text-[#a0ca2f] rounded-xl text-xs font-bold transition-colors border border-[#A6CE39]/30"
                >
                  <span className="w-2 h-2 rounded-full bg-[#A6CE39]"></span>
                  <span>ORCID</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white rounded-xl text-xs font-bold transition-colors border border-blue-500/30"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contacto</span>
                </a>
              )}
            </div>
          </div>

          {/* Biography */}
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Trayectoria Académica & Síntesis</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Creaciones & Software Desarrollado */}
          {member.projects && member.projects.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Creaciones & Desarrollos Destacados</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {member.projects.map((proj, i) => (
                  <a
                    key={i}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-[#0c213d] hover:bg-[#102d54] rounded-2xl border border-blue-500/25 hover:border-blue-400 transition-all flex items-center justify-between gap-3 group/proj"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-xs sm:text-sm font-bold text-white group-hover/proj:text-blue-300 transition-colors">
                          {proj.name}
                        </h5>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          App / Software
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-blue-600/20 group-hover/proj:bg-blue-600 text-blue-300 group-hover/proj:text-white transition-all shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Research Areas */}
          {member.areas && member.areas.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Líneas y Áreas de Investigación</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {member.areas.map((area, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#0c213d] text-blue-200 border border-blue-500/25"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {member.highlights && member.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Aportes Destacados & Proyectos</span>
              </h4>
              <ul className="space-y-2">
                {member.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Member Publications if available */}
          {memberPubs.length > 0 && (
            <div className="mt-6 pt-6 border-t border-blue-900/40">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Publicaciones Registradas en RELISE</span>
              </h4>
              <div className="space-y-2.5">
                {memberPubs.map((pub) => (
                  <div key={pub.id} className="p-3.5 bg-[#0c213d] rounded-2xl border border-blue-500/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {pub.type} • {pub.year}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-white mt-2">
                      {pub.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1">
                      {pub.publisher} {pub.isbn ? `• ISBN: ${pub.isbn}` : ''} {pub.issn ? `• ISSN: ${pub.issn}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
