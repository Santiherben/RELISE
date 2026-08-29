import React from 'react';
import { X, Mail, BookOpen, Award, Sparkles, Building, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import publicationsData from '../data/publications.json';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  // Find publications associated with this member
  const memberPubs = publicationsData.filter(p => 
    p.authors.toLowerCase().includes(member.name.toLowerCase()) ||
    member.name.toLowerCase().includes(p.authors.toLowerCase().split(' ')[0])
  );

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

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer z-10"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card Body */}
        <div className="px-6 sm:px-8 pb-8 pt-0 relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-16 mb-6 text-center sm:text-left">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-[#0a192f] shadow-2xl bg-[#071526] shrink-0">
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
                <div className="w-full h-full flex items-center justify-center bg-blue-900 text-blue-200 font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {member.role}
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#071526] text-slate-300 border border-blue-900/40 flex items-center gap-1.5">
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
