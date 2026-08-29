import React from 'react';
import { Globe2, MapPin, Building, Users, Sparkles } from 'lucide-react';
import networkData from '../data/network.json';

export default function RegionalHubs({ selectedCountry, onSelectCountry }) {
  const flags = {
    UY: '🇺🇾',
    CO: '🇨🇴',
    CR: '🇨🇷',
    MX: '🇲🇽',
    PE: '🇵🇪',
    CL: '🇨🇱'
  };

  const countryGradients = {
    Uruguay: 'from-blue-600/20 via-slate-900 to-slate-950 border-blue-500/40',
    Colombia: 'from-amber-600/20 via-slate-900 to-slate-950 border-amber-500/40',
    'Costa Rica': 'from-emerald-600/20 via-slate-900 to-slate-950 border-emerald-500/40',
    México: 'from-relise-red-600/20 via-slate-900 to-slate-950 border-relise-red-500/40',
    Perú: 'from-relise-red-600/20 via-slate-900 to-slate-950 border-relise-red-500/40',
    Chile: 'from-blue-600/20 via-slate-900 to-slate-950 border-blue-500/40',
  };

  return (
    <section id="nodos" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            Nodos Nacionales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Presencia Regional en América Latina
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            RELISE opera como una red descentralizada en el continente. Seleccione un nodo nacional para filtrar los investigadores e instituciones asociadas.
          </p>
        </div>

        {/* Hubs Cards Grid with rich visual accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {networkData.countries.map((country) => {
            const isSelected = selectedCountry === country.name;
            const gradientClass = countryGradients[country.name] || 'from-slate-900 to-slate-950 border-slate-800';

            return (
              <div
                key={country.code}
                onClick={() => onSelectCountry(isSelected ? 'Todos' : country.name)}
                className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 border bg-gradient-to-b ${gradientClass} ${
                  isSelected
                    ? 'ring-2 ring-blue-500 shadow-2xl scale-[1.02]'
                    : 'hover:border-slate-600 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl drop-shadow-md" role="img" aria-label={country.name}>
                      {flags[country.code] || '🌐'}
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-white flex items-center gap-2">
                        {country.name}
                        {isSelected && (
                          <span className="text-[10px] font-bold bg-blue-600 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                            Activo
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        <span>Sede: {country.hub}</span>
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-slate-800 text-slate-200 border border-slate-700">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>{country.members}</span>
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {country.institutions}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs font-bold text-blue-400">
                  <span>{isSelected ? 'Quitar filtro' : 'Ver investigadores de este nodo'}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-relise-red-950/40 via-slate-900 to-blue-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-blue-600 text-white rounded-2xl shadow-lg">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black text-white">¿Desea sumar a su universidad o centro?</h4>
              <p className="text-xs text-slate-300 mt-0.5">La Red RELISE está permanentemente abierta a la incorporación de nuevos nodos en América Latina.</p>
            </div>
          </div>
          <a
            href="#contacto"
            className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all shadow-md shrink-0"
          >
            Postular Nodo Institucional
          </a>
        </div>

      </div>
    </section>
  );
}
