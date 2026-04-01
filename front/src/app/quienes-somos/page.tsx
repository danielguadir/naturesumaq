export default function QuienesSomos() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Quienes Somos</h1>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    <strong>Nature Sumaq</strong> nació de la pasión por la naturaleza y el deseo de ofrecer productos de cuidado personal que sean respetuosos tanto con nuestro cuerpo como con el planeta.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
                    <div>
                        <h3>Nuestra Misión</h3>
                        <p>Proveer soluciones naturales y efectivas para el cuidado del cabello y la piel, utilizando ingredientes de la más alta calidad y procesos sostenibles.</p>
                    </div>
                    <div>
                        <h3>Nuestra Visión</h3>
                        <p>Ser reconocidos como la marca líder en productos naturales, inspirando a las personas a reconectar con la esencia de la tierra.</p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '3rem', background: '#D8F3DC', borderRadius: '12px' }}>
                    <h3 style={{ textAlign: 'center' }}>¿Por qué Nature Sumaq?</h3>
                    <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li>✓ Ingredientes 100% orgánicos y naturales.</li>
                        <li>✓ Sin químicos agresivos ni parabenos.</li>
                        <li>✓ Cruelty-free (no testeado en animales).</li>
                        <li>✓ Envases amigables con el medio ambiente.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
