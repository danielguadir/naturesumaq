'use client';

import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/quienes-somos', label: 'Quienes somos' },
    { href: '/productos', label: 'Mis productos' },
    { href: '/#recommendations', label: 'Recomendaciones' },
];

export default function Navbar() {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="container navbar__content">
                <Link href="/" className="navbar__logo-container">
                    <div className="navbar__logo-wrapper">
                        <Image
                            src="/images/logo.png"
                            alt="Nature Sumaq Logo"
                            width={50}
                            height={50}
                            className="navbar__logo-img"
                        />
                    </div>
                    <span className="navbar__brand-name">Nature Sumaq</span>
                </Link>
                <ul className="navbar__menu">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="navbar__link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
