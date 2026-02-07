'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    const consentValue = accepted ? 'accepted' : 'refused';
    localStorage.setItem('cookie-consent', consentValue);

    const event = new CustomEvent('cookie-consent-change', {
      detail: { consent: consentValue },
    });
    window.dispatchEvent(event);

    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-300 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="relative p-6 md:p-8">
            <button
              onClick={() => handleConsent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Respect de votre vie privée
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous utilisons des cookies pour analyser notre trafic et améliorer votre expérience.
                  Ces données sont anonymes et nous aident à mieux vous servir. Vous pouvez accepter ou refuser leur utilisation.
                </p>
                <a
                  href="/politique-de-confidentialite"
                  className="text-sm text-amber-600 hover:text-amber-700 underline mt-2 inline-block"
                >
                  En savoir plus sur notre politique de confidentialité
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleConsent(false)}
                  className="px-6 py-3 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Refuser
                </button>
                <button
                  onClick={() => handleConsent(true)}
                  className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 whitespace-nowrap"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
