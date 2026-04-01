import Image from 'next/image';

export default function QuienesSomos() {
    return (
        <section className="about-page">
            <div className="about-page__hero">
                <div className="about-page__hero-bg about-page__hero-bg--logo">
                    <Image
                        src="/images/logo.png"
                        alt="Logo Nature Sumaq desenfocado"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="about-page__hero-overlay"></div>
                <div className="about-page__hero-content container">
                    <span className="section-subtitle">Quienes Somos</span>
                    <h1>Nature Sumaq es cuidado natural hecho con intención.</h1>
                    <p>
                        Nature Sumaq nació de la pasión por la naturaleza y el deseo de ofrecer productos de cuidado personal que sean respetuosos tanto con nuestro cuerpo como con el planeta.
                    </p>
                </div>
            </div>

            <div className="container about-page__content">
                <div className="about-page__grid">
                    <article>
                        <h3>Nuestra Misión</h3>
                        <p>Proveer soluciones naturales y efectivas para el cuidado del cabello y la piel, utilizando ingredientes de la más alta calidad y procesos sostenibles.</p>
                    </article>
                    <article>
                        <h3>Nuestra Visión</h3>
                        <p>Ser reconocidos como la marca líder en productos naturales, inspirando a las personas a reconectar con la esencia de la tierra.</p>
                    </article>
                </div>

                <div className="about-page__card">
                    <h3>¿Por qué Nature Sumaq?</h3>
                    <ul>
                        <li>Ingredientes 100% orgánicos y naturales.</li>
                        <li>Sin químicos agresivos ni parabenos.</li>
                        <li>Cruelty-free (no testeado en animales).</li>
                        <li>Envases amigables con el medio ambiente.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
