export const RECOMMENDATIONS_HASH = '#recommendations';

export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quienes somos' },
  { href: '/productos', label: 'Mis productos' },
  { href: RECOMMENDATIONS_HASH, label: 'Recomendaciones' },
];
