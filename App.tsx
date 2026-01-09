
import React, { useEffect, useState } from 'react';

/**
 * Stork Logistics Transition Landing Page
 * Verbatim text in Portuguese.
 * Automated redirect after 10 seconds.
 */

const App: React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  const REDIRECT_URL = "https://www.storklogistics.com.br";

  useEffect(() => {
    // Automated redirect timer
    const redirectTimer = setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 10000);

    // Visual countdown timer
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#F5F5F5]">
      {/* Background visual element (Subtle Gradient) */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#005B5C] via-transparent to-transparent"></div>
      </div>

      <main className="relative z-10 max-w-3xl w-full flex flex-col items-center space-y-10 md:space-y-14">
        {/* Main Content Area */}
        <div className="space-y-8">
          {/* Unified text block with precise line structure and uniform styling */}
          <section>
            <p className="text-[#383838] text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Motoliner fez parte da nossa história.<br />
              Há 25 anos, começamos um caminho que evoluiu, cresceu e ganhou novos contornos.<br />
              Hoje, seguimos como Stork Logistics:<br />
              o mesmo cuidado, agora com mais estrutura e visão de futuro.
            </p>
          </section>

          {/* Slogan - Visual Emphasis (Separated) */}
          <section className="pt-8 border-t border-gray-200">
            <div className="brand-slogan">
              <span className="block text-[#383838] text-3xl md:text-5xl font-bold tracking-tight">
                Quando tem valor,
              </span>
              <span className="block text-[#005B5C] text-3xl md:text-5xl font-extrabold tracking-tight mt-1">
                exige Stork.
              </span>
            </div>
          </section>
        </div>

        {/* Call to Action Button in Portuguese */}
        <div className="pt-4">
          <a
            href={REDIRECT_URL}
            className="inline-block px-10 py-4 bg-[#005B5C] hover:bg-[#004242] text-white font-semibold rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
          >
            Acessar o site da Stork Logistics
          </a>
        </div>

        {/* Redirect Notice */}
        <div className="text-xs text-gray-400 mt-8 font-medium tracking-widest uppercase">
          Redirecionando automaticamente em {countdown}s
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="absolute bottom-8 text-[10px] text-gray-400 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Stork Logistics. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
