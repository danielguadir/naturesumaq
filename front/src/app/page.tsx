'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RECOMMENDATIONS_HASH } from '@/lib/navigation';

const recommendations = [
    {
        title: 'Rutina natural para el cabello',
        description: 'Descubre cómo un shampoo suave y aceites ligeros protegen la fibra capilar y maximizan brillo natural.',
    },
    {
        title: 'Cuidado de la piel sensible',
        description: 'Usa productos con ingredientes puros y evita fragancias fuertes para mantener la piel equilibrada.',
    },
    {
        title: 'Elegir la mejor fragancia',
        description: 'Combina notas botánicas y texturas ligeras para un aroma fresco que dura todo el día.',
    },
];

export default function Home() {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleShowRecommendations = () => {
    setShowRecommendations(true);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', RECOMMENDATIONS_HASH);
    }
  };

  useEffect(() => {
    const checkHash = () => {
      setShowRecommendations(window.location.hash === RECOMMENDATIONS_HASH);
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <div>
      {!showRecommendations && (
        <section className="hero-senior">
          <div className="container hero-senior__content">
          <div className="hero-senior__text">
            <span className="section-subtitle">Bienvenido a Nature Sumaq</span>
            <h1>Potencia tu belleza con fórmulas naturales.</h1>
            <p className="hero-senior__tagline">Productos creados para tu piel y cabello con ingredientes seleccionados, suaves y responsables.</p>
            <div className="hero-senior__actions">
              <Link href="/productos" className="btn btn--primary">
                Ver Productos
              </Link>
              <button type="button" onClick={handleShowRecommendations} className="btn btn--outline">
                Recomendaciones
              </button>
            </div>
          </div>
          <div className="hero-senior__image-container">
            <div className="hero-senior__image-blob">
              <Image
                src="/images/pag_inicio.jpg"
                alt="Naturaleza Nature Sumaq"
                fill
                style={{ objectFit: 'cover' }}
                className="hero-senior__img"
              />
            </div>
          </div>
        </div>
      </section>
      )}

      {showRecommendations && (
        <section id="recommendations" className="recommendations-section container">
          <div className="recommendations-header">
            <span className="section-subtitle">Recomendaciones</span>
            <h2>Consejos rápidos para una rutina natural</h2>
          </div>
          <div className="recommendations-grid">
            {recommendations.map((item) => (
              <article key={item.title} className="recommendation-card">
                <span className="recommendation-card__label">Consejo</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="essence-section container">
        <div className="essence-grid">
          <div className="essence-content">
            <span className="section-subtitle">Nuestra Esencia</span>
            <h2>Productos 100% Naturales</h2>
            <p>En Nature Sumaq nos dedicamos a crear soluciones de cuidado personal utilizando únicamente ingredientes provenientes directo de la naturaleza.</p>
            <p>Nuestros procesos son amigables con el medio ambiente y buscamos siempre la mayor calidad en cada gota de nuestros aceites y shampoos.</p>
          </div>
          <div className="essence-visual">
            <div className="essence-card">
              <div className="essence-card__leaf"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
