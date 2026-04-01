import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="hero-senior">
        <div className="container hero-senior__content">
          <div className="hero-senior__text">
            <h1>Nature Sumaq</h1>
            <p className="hero-senior__tagline">Potenciando tu belleza de forma natural con los mejores extractos.</p>
            <div className="hero-senior__actions">
              <Link href="/productos" className="btn btn--primary">
                Ver Productos
              </Link>
              <Link href="/quienes-somos" className="btn btn--outline">
                Nuestra Historia
              </Link>
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
