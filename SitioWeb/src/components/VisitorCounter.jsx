import React, { useState, useEffect } from 'react';
import { Eye, TrendingUp } from 'lucide-react';

export default function VisitorCounter({ className = '' }) {
  const [visits, setVisits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initCounter = async () => {
      const BASE_COUNT = 1540;
      const STORAGE_KEY = 'relise_portal_visits';
      const SESSION_KEY = 'relise_session_counted';

      // Read current local baseline
      let localCount = parseInt(localStorage.getItem(STORAGE_KEY) || BASE_COUNT, 10);
      const isSessionCounted = sessionStorage.getItem(SESSION_KEY);

      // Increment once per browser session
      if (!isSessionCounted) {
        localCount += 1;
        localStorage.setItem(STORAGE_KEY, localCount.toString());
        sessionStorage.setItem(SESSION_KEY, 'true');
      }

      // Query free cloud counter (CounterAPI)
      try {
        const response = await fetch('https://api.counterapi.dev/v1/relise-latam-web/visits/up', {
          method: 'GET',
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          if (data && typeof data.count === 'number') {
            const cloudTotal = BASE_COUNT + data.count;
            setVisits(cloudTotal);
            localStorage.setItem(STORAGE_KEY, cloudTotal.toString());
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Network or adblock blocked CounterAPI -> fallback gracefully
      }

      setVisits(localCount);
      setLoading(false);
    };

    initCounter();
  }, []);

  const formattedCount = visits ? visits.toLocaleString('es-UY') : '1.540';

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white/90 dark:bg-[#071526]/90 border border-slate-200 dark:border-blue-500/30 text-xs shadow-xs dark:shadow-md backdrop-blur-md transition-all hover:border-blue-300 dark:hover:border-blue-400/50 ${className}`}
      title="Contador global de visitas al portal RELISE"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
        <Eye className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Visitas:</span>
        <span className="font-bold text-slate-900 dark:text-white font-mono tracking-wider text-xs">
          {loading ? '...' : formattedCount}
        </span>
      </div>
    </div>
  );
}
