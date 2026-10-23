import React from 'react';
import { X, FileText, Printer, Download } from 'lucide-react';
import teamData from '../data/team.json';

export default function ActaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Acta Constitutiva Oficial de RELISE
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Red Latinoamericana de Investigación Social y Educativa • Marzo 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-semibold"
              title="Imprimir o Guardar PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar acta"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed text-sm">
          <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="w-24 h-24 mx-auto mb-3 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-white p-2 flex items-center justify-center">
              <img src="./logo/logoOficialRELISE_transparent.png" alt="RELISE" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Acta Constitutiva
            </h2>
            <h3 className="text-sm sm:text-base font-semibold text-brand-700 dark:text-brand-300 mt-1">
              Red Latinoamericana de Investigación Social y Educativa (RELISE)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Suscrita en asamblea regional virtual • Marzo de 2026
            </p>
          </div>

          <section className="space-y-2">
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs flex items-center justify-center font-black">1</span>
              Presentación
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              En los países de México, Costa Rica, Colombia, Perú, Chile y Uruguay, mediante reunión virtual celebrada durante el mes de marzo del año 2026, académicos, investigadores y docentes representantes de instituciones de educación superior y organismos educativos de América Latina acuerdan constituir la <strong>Red Latinoamericana de Investigación Social y Educativa (RELISE)</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              La presente red nace con el propósito de fortalecer los vínculos de cooperación científica, técnica, pedagógica y humana entre investigadores de la región, promoviendo espacios de producción colectiva de conocimiento orientados a la comprensión y transformación de las realidades sociales y educativas latinoamericanas.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs flex items-center justify-center font-black">2</span>
              Fundamentación
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Los miembros fundadores de RELISE reconocen que los desafíos sociales, educativos, culturales y democráticos de América Latina requieren una mirada regional, interdisciplinaria y colaborativa que trascienda las fronteras geográficas, las diferencias ideológicas y los silos institucionales.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-900">
              <h5 className="font-bold text-brand-900 dark:text-brand-200 mb-1">3. Misión</h5>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Articular esfuerzos de investigación social y educativa en América Latina mediante el trabajo colaborativo entre investigadores, docentes e instituciones, promoviendo la producción científica, la formación continua y la transformación educativa desde perspectivas éticas, inclusivas e interdisciplinarias.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-accent-50/60 dark:bg-accent-950/40 border border-accent-200 dark:border-accent-900">
              <h5 className="font-bold text-accent-900 dark:text-accent-200 mb-1">4. Visión</h5>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Consolidarse como una red latinoamericana de referencia académica en investigación social y educativa, reconocida por su contribución científica, su compromiso con la transformación social y su capacidad de articulación regional e internacional.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs flex items-center justify-center font-black">15</span>
              Miembros Fundadores y Registro Institucional
            </h4>
            
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="min-w-full text-xs text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold uppercase">
                  <tr>
                    <th className="px-4 py-3">Investigador(a)</th>
                    <th className="px-4 py-3">Institución Principal</th>
                    <th className="px-4 py-3">País</th>
                    <th className="px-4 py-3">ORCID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {teamData.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-4 py-2.5 font-bold text-slate-900 dark:text-white">{m.name}</td>
                      <td className="px-4 py-2.5 text-slate-600 dark:text-slate-300">
                        {m.institution.includes('•') ? m.institution.split('•')[1].trim() : m.institution.split('/')[0].trim()}
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-2 py-0.5 rounded-md bg-brand-50 dark:bg-brand-950 text-brand-800 dark:text-brand-300 font-semibold">
                          {m.country}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 font-mono text-[11px]">
                        {m.orcid ? m.orcid.replace('https://orcid.org/', '') : 'En trámite'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-center text-xs text-slate-600 dark:text-slate-400 italic">
            "Los miembros fundadores de RELISE manifiestan su voluntad de construir un espacio latinoamericano de cooperación científica, diálogo interdisciplinario y producción colectiva de conocimiento orientado al fortalecimiento de la educación, la investigación y la transformación social de nuestros pueblos."
          </div>
        </div>

        <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar / Imprimir Copia</span>
          </button>
        </div>
      </div>
    </div>
  );
}
