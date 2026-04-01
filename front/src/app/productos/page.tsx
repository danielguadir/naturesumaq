'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/redux/store';
import { setProducts, setLoading, setError } from '@/lib/redux/slices/productsSlice';
import Image from 'next/image';

// MOCK DATA for local demonstration as requested by the user
const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'Shampoo Natural Sumaq',
        description: 'Fórmula enriquecida con extractos botánicos para un cabello radiante y fuerte.',
        price: 35000,
        category: 'shampoo',
        imageUrl: '/images/producto2.jpg',
    },
    {
        id: '2',
        name: 'Aceite Esencial de la Tierra',
        description: 'Hidratación profunda y aroma relajante extraído de semillas seleccionadas.',
        price: 42000,
        category: 'oil',
        imageUrl: '/images/producto1.jpg',
    }
];

const whatsappPhone = '573158364172';
const buildWhatsappLink = (productName: string) => {
    const message = `Hola Natura Sumaq, necesito hacer este pedido: ${productName}`;
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
};

export default function Productos() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(setLoading(true));
            try {
                // We try to fetch from API, but if it fails (not connected), we use MOCKS
                const response = await fetch('/api/products');
                if (!response.ok) throw new Error('API Error');
                const data = await response.json();

                if (data && data.length > 0) {
                    dispatch(setProducts(data));
                } else {
                    // Fallback to mocks if DB is empty
                    dispatch(setProducts(MOCK_PRODUCTS));
                }
            } catch (err) {
                // On error (local development), use MOCKS to avoid showing error to user
                console.log('Using mock products for local demo');
                dispatch(setProducts(MOCK_PRODUCTS));
            } finally {
                dispatch(setLoading(false));
            }
        };

        if (items.length === 0) {
            fetchProducts();
        }
    }, [dispatch, items.length]);

    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <header className="products-hero">
                <h1>Mis Productos y Servicios</h1>
                <p>Pureza natural en cada detalle de nuestra selección exclusiva.</p>
            </header>

            {loading && <p className="status-msg">Cargando productos...</p>}

            <div className="products-grid-senior">
                {items.map((product) => (
                    <div key={product.id} className="senior-product-card">
                        <div className="senior-product-card__image">
                            <Image
                                src={product.imageUrl || '/images/logo.png'}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="senior-product-card__badge">
                                {product.category === 'shampoo' ? 'Pelo' : 'Cuerpo'}
                            </div>
                        </div>
                        <div className="senior-product-card__content">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="senior-product-card__footer">
                                <span className="senior-product-card__price">
                                    ${product.price?.toLocaleString()}
                                </span>
                                <a
                                    href={buildWhatsappLink(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--secondary"
                                >
                                    🛒
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
