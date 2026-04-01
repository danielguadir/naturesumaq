'use client';

import Link from 'next/link';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsappLink } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__grid">
                <div className="footer__brand">
                    <h2 className="footer__logo">Nature Sumaq</h2>
                    <p>Potenciando tu belleza de forma natural con los mejores extractos.</p>
                    <div className="footer__socials">
                        <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram />
                        </a>
                        <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook />
                        </a>
                    </div>
                </div>

                <div className="footer__links">
                    <h3>Navegación</h3>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/quienes-somos">Quienes somos</Link></li>
                        <li><Link href="/productos">Productos</Link></li>
                    </ul>
                </div>

                <div className="footer__contact">
                    <h3>Contacto</h3>
                    <ul>
                        <li>
                            <Phone size={18} />
                            <span>{CONTACT_INFO.whatsapp[0].number}</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>contacto@naturasumaq.com</span>
                        </li>
                        <li style={{ alignItems: 'flex-start' }}>
                            <MapPin size={18} style={{ marginTop: '4px' }} />
                            <span>Hecho con amor en Colombia</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Nature Sumaq. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
