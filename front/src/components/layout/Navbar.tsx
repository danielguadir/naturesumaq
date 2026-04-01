'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="navbar">
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
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/quienes-somos">Quienes somos</Link></li>
                    <li><Link href="/productos">Mis productos</Link></li>
                </ul>
            </div>
        </nav>
    );
}
