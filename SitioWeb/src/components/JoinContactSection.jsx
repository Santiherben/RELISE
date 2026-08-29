import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, UserPlus, Building, Sparkles, Globe } from 'lucide-react';

export default function JoinContactSection() {
  const [formType, setFormType] = useState('investigador');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pais: 'Uruguay',
    institucion: '',
    orcid: '',
    areaInteres: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
            Adhesión & Vinculación
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Únase a la Red RELISE
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Invitamos a investigadores, grupos de estudio, universidades y centros académicos de América Latina y el mundo a vincularse a nuestras actividades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-brand-600" />
                <span>Modalidades de Participación</span>
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <strong className="text-slate-900 dark:text-white block mb-1">1. Investigador(a) Asociado(a)</strong>
                  Participación en proyectos conjuntos, ciclos de disertaciones, coautoría de libros y revisión por pares.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <strong className="text-slate-900 dark:text-white block mb-1">2. Nodo Institucional</strong>
                  Universidades y grupos de investigación que deseen formalizar articulación académica.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <strong className="text-slate-900 dark:text-white block mb-1">3. Investigadores Jóvenes y Posgrado</strong>
                  Espacios de mentoría, pasantías virtuales y difusión de tesis.
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-600" />
                  <span>Correo Institucional: <a href="mailto:contacto@relise.org" className="font-semibold text-brand-600 hover:underline">contacto@relise.org</a></span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-2xl p-6 shadow-md">
              <h5 className="font-bold text-base mb-2">Compromiso de Ciencia Abierta</h5>
              <p className="text-xs text-brand-100 leading-relaxed">
                RELISE no tiene costo arancelario para la vinculación académica. Se rige bajo principios de reciprocidad, cooperación horizontal y divulgación científica abierta.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  ¡Postulación Enviada con Éxito!
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Gracias por tu interés en integrar la Red Latinoamericana de Investigación Social y Educativa (RELISE). El Comité de Coordinación se comunicará contigo prontamente.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-xs font-bold text-brand-600 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Formulario de Postulación o Contacto
                  </h4>
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setFormType('investigador')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        formType === 'investigador' ? 'bg-white dark:bg-slate-700 text-brand-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Investigador
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType('institucion')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        formType === 'institucion' ? 'bg-white dark:bg-slate-700 text-brand-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Institución
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dra. Carmen Morales"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Correo Electrónico Académico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="usuario@universidad.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      País de Residencia *
                    </label>
                    <select
                      value={formData.pais}
                      onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    >
                      <option value="Uruguay">Uruguay</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="México">México</option>
                      <option value="Perú">Perú</option>
                      <option value="Chile">Chile</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Brasil">Brasil</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Otro">Otro país de la región</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Filiación Institucional / Universidad *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Universidad / Instituto"
                      value={formData.institucion}
                      onChange={(e) => setFormData({ ...formData, institucion: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Número o Enlace ORCID
                    </label>
                    <input
                      type="text"
                      placeholder="https://orcid.org/0000-0000-0000-0000"
                      value={formData.orcid}
                      onChange={(e) => setFormData({ ...formData, orcid: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Línea de Interés Principal
                    </label>
                    <select
                      value={formData.areaInteres}
                      onChange={(e) => setFormData({ ...formData, areaInteres: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    >
                      <option value="">Seleccione un eje temático...</option>
                      <option value="ia-educacion">Inteligencia Artificial y Educación</option>
                      <option value="inclusion">Educación Inclusiva y LSU</option>
                      <option value="politicas">Políticas Públicas y Género</option>
                      <option value="ciencias">Ciencias Naturales y Educación Ambiental</option>
                      <option value="cultura">Cultura, Subjetividad e Infancias</option>
                      <option value="paz">Gestión Educativa y Educación para la Paz</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Mensaje, Propuesta o Resumen de Interés *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente sobre tus proyectos o cómo te gustaría colaborar con RELISE..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitud de Adhesión</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
