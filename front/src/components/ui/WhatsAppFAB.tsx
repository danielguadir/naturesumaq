'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { CONTACT_INFO, getWhatsappLink } from '@/lib/constants';

export default function WhatsAppFAB() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`whatsapp-fab ${isOpen ? 'whatsapp-fab--open' : ''}`}>
            {isOpen && (
                <div className="whatsapp-fab__menu">
                    <div className="whatsapp-fab__header">
                        <h3>¿En qué podemos ayudarte?</h3>
                        <p>Elige un asesor para chatear</p>
                    </div>
                    <div className="whatsapp-fab__list">
                        {CONTACT_INFO.whatsapp.map((item) => (
                            <a
                                key={item.number}
                                href={getWhatsappLink(item.number)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-fab__item"
                            >
                                <div className="whatsapp-fab__item-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="whatsapp-fab__item-info">
                                    <span className="whatsapp-fab__item-label">{item.label}</span>
                                    <span className="whatsapp-fab__item-number">{item.number}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <button
                className="whatsapp-fab__trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Contactar por WhatsApp"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                {!isOpen && <span className="whatsapp-fab__badge">Nosotros te asesoramos</span>}
            </button>
        </div>
    );
}
